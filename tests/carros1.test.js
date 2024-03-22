const request = require("supertest");
const app = require("../src/index.js");

describe("API /carros", () => {
  test("Debería obtener todos los carros", async () => {
    const res = await request(app).get("/carros");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
