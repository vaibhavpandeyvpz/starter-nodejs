const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('index route returns 200', (done) => {
    request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
