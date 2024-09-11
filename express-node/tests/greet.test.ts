import request from "supertest";
import app from "../src/app";

describe("/greet route", () => {
  it("should return the correct greeting message when name is provided", async () => {
    const response = await request(app).get("/greet?name=John");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello, John!");
    expect(response.body.filteredNames).toEqual(["John", "Emily"]);
  });

  it("should return a 400 error if no name is provided", async () => {
    const response = await request(app).get("/greet");
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Name query parameter is required.");
  });
});
