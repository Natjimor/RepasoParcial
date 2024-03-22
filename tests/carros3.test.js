const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería crear un nuevo carro', async () => {
        const nuevoCarro = {
            nombre: 'Nissan Sentra',
            año_salida: 2023,
            id: 'NSE011',
            detalles: {
                pasajeros: 5,
                modelo: 'Sedan',
                color: 'Blanco'
            }
        };
        const res = await request(app)
            .post('/carros')
            .send(nuevoCarro);
        expect(res.statusCode).toEqual(201);
    });
});