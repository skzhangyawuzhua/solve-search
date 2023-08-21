import solve_search from "../dist/index";

describe("test url search", () => {
  it("search string ", () => {
    const res = solve_search("?arg1=k&arg2=3");
    expect(res).toEqual({ arg1: "k", arg2: "3" });
  });

  it("complete string ", () => {
    const res = solve_search("https://test.com/?time=time1&from=share");
    expect(res).toEqual({ time: "time1", from: "share" });
  });
});
