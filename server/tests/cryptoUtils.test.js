const { encrypt, decrypt } = require('../utils/cryptoUtils');

describe('Crypto Utils', () => {
  const originalText = 'This is a secret message.';
  const complexObject = { id: 1, data: 'test data', nested: { value: 123 } };

  describe('encrypt', () => {
    it('should encrypt a string', () => {
      const encrypted = encrypt(originalText);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toEqual(originalText);
    });

    it('should encrypt an object by stringifying it', () => {
      const encrypted = encrypt(complexObject);
      expect(encrypted).toBeDefined();
      expect(typeof encrypted).toBe('string');
      expect(encrypted).not.toEqual(JSON.stringify(complexObject));
    });

    it('should produce different ciphertexts for the same input due to random IV', () => {
      const encrypted1 = encrypt(originalText);
      const encrypted2 = encrypt(originalText);
      expect(encrypted1).not.toEqual(encrypted2);
    });

    it('should throw an error for non-stringifiable input if JSON.stringify fails', () => {
      const circularObject = {};
      circularObject.a = { b: circularObject };
      // This error is thrown by JSON.stringify within encrypt
      expect(() => encrypt(circularObject)).toThrow('Invalid input for encryption.');
    });
  });

  describe('decrypt', () => {
    it('should decrypt an encrypted string back to the original', () => {
      const encrypted = encrypt(originalText); // originalText is a non-JSON string
      const decrypted = decrypt(encrypted);
      // decrypt will try JSON.parse, fail for non-JSON string, and return the string itself
      expect(decrypted).toEqual(originalText);
    });

    it('should decrypt an encrypted object back to the original object', () => {
      const encrypted = encrypt(complexObject); // complexObject is an object
      const decrypted = decrypt(encrypted);     // encrypt stringifies, decrypt parses back to object
      expect(decrypted).toEqual(complexObject); // Compare object to object
    });

    it('should return null for malformed encrypted text (e.g., missing IV separator)', () => {
      const malformedEncryptedText = 'sometextwithoutseparator';
      const decrypted = decrypt(malformedEncryptedText);
      expect(decrypted).toBeNull();
    });

    it('should return null for tampered ciphertext (e.g., truncated to cause padding error)', () => {
      let encrypted = encrypt(originalText); // originalText is 'This is a secret message.'
      const parts = encrypted.split(':');
      let tamperedCiphertextHex = parts[1];

      if (tamperedCiphertextHex && tamperedCiphertextHex.length > 4) { // Ensure there's enough to truncate
        // Truncate the ciphertext by 1 byte (2 hex characters) to cause a padding error
        tamperedCiphertextHex = tamperedCiphertextHex.substring(0, tamperedCiphertextHex.length - 2);
      } else {
        // If ciphertext is too short to truncate meaningfully for this test, make it clearly invalid
        tamperedCiphertextHex = 'invalidhex';
      }
      
      const tamperedCiphertext = parts[0] + ':' + tamperedCiphertextHex;
      const decrypted = decrypt(tamperedCiphertext);
      expect(decrypted).toBeNull();
    });

     it('should return null if IV is not hex', () => {
      const encrypted = encrypt(originalText);
      const parts = encrypted.split(':');
      const malformedEncryptedText = 'nothex:' + parts[1];
      const decrypted = decrypt(malformedEncryptedText);
      expect(decrypted).toBeNull();
    });

    it('should return null if encrypted text is not hex', () => {
      const encrypted = encrypt(originalText);
      const parts = encrypted.split(':');
      const malformedEncryptedText = parts[0] + ':nothex';
      const decrypted = decrypt(malformedEncryptedText);
      expect(decrypted).toBeNull();
    });
  });

  describe('Encryption/Decryption Cycle', () => {
    it('should correctly encrypt and then decrypt various inputs', () => {
      const testInputs = [
        'Hello, World!',
        '',
        '1234567890!@#$%^&*()_+',
        { key: 'value', num: 123, bool: true },
        ['a', 'b', 123, { nested: 'object' }],
        null, // encrypt will stringify to "null", decrypt will parse back to null value
      ];

      testInputs.forEach(input => {
        const encrypted = encrypt(input);
        const decrypted = decrypt(encrypted);
        expect(decrypted).toEqual(input);
      });

      // Test case for a string that is already valid JSON
      const jsonString = JSON.stringify({ message: "this is a json string" });
      const encryptedJsonString = encrypt(jsonString); // encrypts the string as-is
      const decryptedFromJsonString = decrypt(encryptedJsonString); // decrypts to string, then JSON.parses it
      expect(decryptedFromJsonString).toEqual(JSON.parse(jsonString)); // compare object to object
    });

    it('should cause encrypt to throw for undefined input', () => {
      // Current encrypt function will attempt to JSON.stringify(undefined), which results in undefined.
      // Then it passes undefined to crypto.cipher.update, which throws an error.
      // This test verifies that an error is thrown by encrypt for undefined input.
      // Note: The specific error message might depend on the crypto library's behavior for undefined input.
      // A more robust encrypt function might explicitly check for undefined after stringification.
      expect(() => encrypt(undefined)).toThrow(); 
    });
  });
});