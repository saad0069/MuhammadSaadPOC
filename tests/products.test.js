const request = require('supertest');
const app = require('../server/server');

// test for food API
describe('Food API Endpoints', () => {

    // Test GET /food return status 200 and all items
    test('GET /foods should return 200 and list of foods', async () => {
        const res = await request(app).get('/foods');

        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBe(5);
    });

    // test unkien route returns 404 status
    test('GET /unkown should return 404', async () => {
        const res = await request(app).get('/unkown');

        expect(res.statusCode).toBe(404);
    });
});