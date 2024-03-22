const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería retornar un error al intentar actualizar un carro inexistente', async () => {
        const res = await request(app)
            .put('/carros/ID_INEXISTENTE')
            .send({ nombre: 'Toyota Corolla Actualizado' });
        expect(res.statusCode).toEqual(404);
    });
});