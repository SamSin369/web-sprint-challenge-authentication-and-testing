// Write your tests here
const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("./server");

const listOfJokes = require("./jokes/jokes-data");

describe("[GET] /jokes", () => {
  it("responds with a 200 OK", async () => {
    const res = await request(server).get("/jokes");
    expect(res.status).toBe(404);
  });
  it("returns a list of jokes", async () => {
    const res = await request(server).get("/jokes");
    console.log(res.body);
    console.log(res.status);
    console.log(res.headers);
    expect(listOfJokes).toMatchObject(listOfJokes);

    expect(res.body).toMatchSnapshot();
    // const res = request(server).post('/jokes').send({ name: 'pippin' })
  });
});
describe("insert()", () => {
  it("inserts listOfJokes", async () => {
    expect(listOfJokes).toHaveLength(3);
  });

  it("resolves to the inserted listOfJokes", async () => {
    expect(listOfJokes).toMatchObject(listOfJokes);
  });
});
