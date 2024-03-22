const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería obtener un carro por su ID', async () => {
        const res = await request(app).get('/carros/TCO001');
        expect(res.statusCode).toEqual(200);
        expect(res.body.nombre).toEqual('Toyota Corolla');
    });
});
