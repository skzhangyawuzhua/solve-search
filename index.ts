const reg = /^(?!&)[^&]*&.*=/;

const solve_search = (query_string: string): Record<string, string> | null => {
  try {
    if (!reg.test(query_string)) {
      throw new Error("unexpect string");
    }

    if (query_string.includes("?")) {
      query_string = query_string.split("?")[1];
    }

    let initObj: Record<string, string> = {};

    const query = query_string
      .split("&")
      .map(element => {
        return element.split("=");
      })
      .reduce((p, c) => {
        p[c[0]] = decodeURIComponent(c[1]);
        return p;
      }, initObj);

    return query;
  } catch (e) {
    return null;
  }
};

export default solve_search;
