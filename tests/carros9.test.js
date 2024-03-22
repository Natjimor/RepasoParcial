const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería eliminar un carro existente', async () => {
        const res = await request(app)
            .delete('/carros/TCO001');
        expect(res.statusCode).toEqual(200);
    });
});