let obj = {
    field1: "hello, world",
    name: "Johnny",
    t: 99,
    almostthere: "15",
    subobj: {
        name: 13,
        arr: [
            { g: -4, k: 1 },
            { test: NaN, x: 15 }
        ]
    },
    test: "g"
}

   function findPath(obj) {
    let str = "";

    if (Object.keys(obj).length === 0) {
        return null;
    }
    for (const key in obj) {
        if (obj[key] === 15) {
            str = `${key}`;
            console.log(str);
        } else if (typeof obj[key] === "object") {
            str = `${key}.${findPath(obj[key])}`;
            console.log(str);
        }
    }
    if (str !== "" && str.lastIndexOf(".") === str.length - 1) {
        str = null;
    }
    return str;
}
console.log(findPath(obj));