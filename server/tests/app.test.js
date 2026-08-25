const request = require('supertest');
const app = require('../index'); // Import the configured Express app
const mongoose = require('mongoose');

describe('Basic API Endpoints', () => {
  describe('GET /api/hello', () => {
    it('should return Hello World', async () => {
      const res = await request(app).get('/api/hello');
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe('Hello World from the backend!');
    });
  });
});

// Close the MongoDB connection after all tests are done
afterAll(async () => {
  await mongoose.connection.close();
});