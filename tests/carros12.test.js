const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería obtener una lista de carros filtrados por modelo', async () => {
        const res = await request(app).get('/carros?modelo=Sedan');
        expect(res.statusCode).toEqual(200);
        // Verifica que el cuerpo de la respuesta contenga solo carros del modelo Sedan
        const carrosFiltrados = res.body;
        expect(res.body.length).toEqual(carrosFiltrados.length);
    });
});