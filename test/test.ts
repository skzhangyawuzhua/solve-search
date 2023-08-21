import solve_search from "../dist/index";

describe("test url search", () => {
  it("解析search部分", () => {
    const res = solve_search("?arg1=k&arg2=3");
    expect(res).toEqual({ arg1: "k", arg2: "3" });
  });

  it("解析完整url", () => {
    const res = solve_search("https://test.com/?time=time1&from=share");
    expect(res).toEqual({ time: "time1", from: "share" });
  });

  it("无法解析时返回null", () => {
    const res = solve_search("testttt");
    expect(res).toBeNull();
  });

  it("类似但不是合法的search", () => {
    const res = solve_search("&testttt=2");
    expect(res).toBeNull();
  });
});
