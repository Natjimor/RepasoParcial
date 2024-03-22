const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería eliminar todos los carros y obtener una lista vacía', async () => {
        // Limpiar la base de datos de carros aquí si es necesario
        await request(app).delete('/carros');

        const res = await request(app).get('/carros');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
    });
});
