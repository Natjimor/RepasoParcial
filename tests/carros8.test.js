const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería actualizar un carro existente', async () => {
        const actualizacionCarro = {
            nombre: 'Toyota Corolla Actualizado',
            año_salida: 2021,
            detalles: {
                pasajeros: 5,
                modelo: 'Sedan',
                color: 'Negro'
            }
        };
        const res = await request(app)
            .put('/carros/TCO001')
            .send(actualizacionCarro);
        expect(res.statusCode).toEqual(200);
        expect(res.body.nombre).toEqual('Toyota Corolla Actualizado');
    });
});