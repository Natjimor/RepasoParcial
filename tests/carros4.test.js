const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería retornar un error al intentar eliminar un carro inexistente', async () => {
        const res = await request(app)
            .delete('/carros/ID_INEXISTENTE');
        expect(res.statusCode).toEqual(404);
    });
});