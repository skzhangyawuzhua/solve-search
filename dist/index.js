const solve_search = (query_string) => {
    let query = {};
    console.log("query_string:", query_string);
    if (query_string.includes("?")) {
        query_string = query_string.split("?")[1];
    }
    query = query_string
        .split("&")
        .map(element => {
        return element.split("=");
    })
        .reduce((p, c) => {
        p[c[0]] = decodeURIComponent(c[1]);
        return p;
    }, {});
    return query;
};
export default solve_search;
