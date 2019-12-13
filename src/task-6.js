
export default function findPath(obj) {
    let str = "";

    if (Object.keys(obj).length === 0) {
        return null;
    }
    for (const key in obj) {
        if (obj[key] === 15) {
            str = `${key}`;
            
        } else if (typeof obj[key] === "object") {
            str = `${key}.${findPath(obj[key])}`;
        }
    }
    if (str !== "" && str.lastIndexOf(".") === str.length - 1) {
        str = null;
    }
    return str;
}
