const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería obtener una lista de carros filtrados por año de salida', async () => {
        const res = await request(app).get('/carros?year=2021');
        expect(res.statusCode).toEqual(200);
        // Verifica que el cuerpo de la respuesta contenga solo carros del año 2021
        const carrosFiltrados = res.body.filter(carro => carro.año_salida === 2021);
        expect(res.body.length).toEqual(carrosFiltrados.length);
    });
});