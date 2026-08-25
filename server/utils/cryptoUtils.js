const crypto = require('crypto');
require('dotenv').config(); // Ensure environment variables are loaded

const ALGORITHM = 'aes-256-cbc';
const IV_LENGTH = 16; // For AES, this is always 16

let encryptionKeyBuffer;
const rawEncryptionKey = process.env.BIOMETRIC_ENCRYPTION_KEY;

if (rawEncryptionKey && rawEncryptionKey.length >= 32) {
  // Use the first 32 characters to form a 32-byte buffer
  encryptionKeyBuffer = Buffer.from(rawEncryptionKey.substring(0, 32), 'utf8');
  if (encryptionKeyBuffer.length !== 32) {
      console.error(
        `Critical Error: BIOMETRIC_ENCRYPTION_KEY ('${rawEncryptionKey.substring(0,10)}...') is >= 32 chars but resulted in a buffer of length ${encryptionKeyBuffer.length} bytes. AES-256-CBC requires a 32-byte key. Using a default insecure key.`
      );
      encryptionKeyBuffer = Buffer.alloc(32); // Fallback to default insecure key
  } else {
    console.log('Successfully loaded BIOMETRIC_ENCRYPTION_KEY for encryption (32 bytes).');
  }
} else {
  if (!rawEncryptionKey) {
    console.warn(
      'Warning: BIOMETRIC_ENCRYPTION_KEY is NOT SET in .env. Using a default insecure key (32 zero bytes). THIS IS NOT SECURE FOR PRODUCTION.'
    );
  } else { // Key is set but too short
    console.warn(
      `Warning: BIOMETRIC_ENCRYPTION_KEY is too short (length ${rawEncryptionKey.length} chars, ${Buffer.from(rawEncryptionKey, 'utf8').length} bytes). AES-256-CBC requires 32 bytes. Using a default insecure key (32 zero bytes). THIS IS NOT SECURE FOR PRODUCTION.`
    );
  }
  encryptionKeyBuffer = Buffer.alloc(32); // Default insecure key
}

const ENCRYPTION_KEY = encryptionKeyBuffer;

function encrypt(text) {
  if (typeof text !== 'string') {
    try {
      text = JSON.stringify(text);
    } catch (e) {
      console.error('Encryption error: Input could not be stringified.');
      throw new Error('Invalid input for encryption.');
    }
  }
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decrypt(text) {
  try {
    if (typeof text !== 'string' || !text.includes(':')) {
      // console.error('Decryption error: Invalid input format. Missing separator.');
      return null;
    }

    const parts = text.split(':');
    if (parts.length < 2) { // Ensure there's at least an IV and some ciphertext
        // console.error('Decryption error: Invalid input format. Not enough parts.');
        return null;
    }
    const ivHex = parts.shift();
    const encryptedTextHex = parts.join(':');

    // Basic hex validation for IV and encrypted text
    // Check if they are valid hex strings and have an even length (since 1 byte = 2 hex chars)
    if (!/^[0-9a-fA-F]*$/.test(ivHex) || ivHex.length % 2 !== 0 ||
        !/^[0-9a-fA-F]*$/.test(encryptedTextHex) || encryptedTextHex.length % 2 !== 0) {
        // console.error('Decryption error: IV or encrypted text is not valid hex or has odd length.');
        return null;
    }
    
    const iv = Buffer.from(ivHex, 'hex');
    // Check IV length AFTER converting from hex
    if (iv.length !== IV_LENGTH) {
        // console.error(`Decryption error: Invalid IV length. Expected ${IV_LENGTH} bytes, got ${iv.length} bytes from hex '${ivHex}'.`);
        return null;
    }

    const encryptedText = Buffer.from(encryptedTextHex, 'hex');
    // If encryptedTextHex was not valid hex, Buffer.from might produce an empty buffer or throw.
    // If it produces an empty buffer from a non-empty hex string, it's an issue.
    if (encryptedText.length === 0 && encryptedTextHex.length > 0) {
        // console.error('Decryption error: Encrypted text hex string was invalid, resulted in empty buffer.');
        return null;
    }

    const decipher = crypto.createDecipheriv(ALGORITHM, ENCRYPTION_KEY, iv);
    let decryptedBuffer = decipher.update(encryptedText); // Input is buffer, output is buffer
    decryptedBuffer = Buffer.concat([decryptedBuffer, decipher.final()]); // Concatenate final block
    
    const decryptedString = decryptedBuffer.toString('utf8');

    try {
      return JSON.parse(decryptedString); // Attempt to parse if it was originally an object/array
    } catch (e) {
      return decryptedString; // Return as string if not JSON
    }
  } catch (error) {
    // This will catch errors from Buffer.from if hex is invalid (though regex check helps),
    // crypto.createDecipheriv, decipher.update, or decipher.final (e.g., bad key, tampered data leading to padding error)
    // console.error('Decryption failed during crypto operations or string conversion:', error.message);
    return null;
  }
}

module.exports = { encrypt, decrypt };