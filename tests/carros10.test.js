const request = require("supertest");
const app = require("../src/index.js");

test('Debería retornar un error al intentar crear un carro con ID existente', async () => {
    const nuevoCarro = {
        nombre: 'Toyota Corolla',
        año_salida: 2021,
        id: 'TCO001',
        detalles: {
            pasajeros: 5,
            modelo: 'Sedan',
            color: 'Negro'
        }
    };
    const res = await request(app)
        .post('/carros')
        .send(nuevoCarro);
    expect(res.statusCode).toEqual(400);
});