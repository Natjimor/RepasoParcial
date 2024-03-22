const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería retornar un error al intentar obtener un carro inexistente por su ID', async () => {
        const res = await request(app).get('/carros/ID_INEXISTENTE');
        expect(res.statusCode).toEqual(404);
    });
});