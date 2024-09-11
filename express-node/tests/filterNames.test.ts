import { filterNames } from "../src/filter";

describe("filterNames function", () => {
  it("should return names with more than 3 characters", () => {
    const names = ["Sam", "John", "Max", "Emily"];
    expect(filterNames(names)).toEqual(["John", "Emily"]);
  });

  it("should return an empty array if no names are longer than 3 characters", () => {
    const names = ["Sam", "Max"];
    expect(filterNames(names)).toEqual([]);
  });
});
