const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería obtener una lista de carros filtrados por color', async () => {
        const res = await request(app).get('/carros?color=Negro');
        expect(res.statusCode).toEqual(200);
        // Verifica que el cuerpo de la respuesta contenga solo carros del color Negro
        const carrosFiltrados = res.body.filter(carro => carro.color === 'Negro');
        expect(res.body.length).toEqual(carrosFiltrados.length);
    });
});