const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
    test('Debería devolver una lista vacía si no se encuentran carros con los parámetros proporcionados', async () => {
        const res = await request(app).get('/carros?modelo=Convertible');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(0);
    });
});