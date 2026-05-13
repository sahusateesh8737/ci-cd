const request = require('supertest');
const app = require('./app');

test('GET /health returns 200 and healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('Healthy');
});