import chai from "chai";
import task from "../../src/task-6.js";

const assert = chai.assert,
    findPath = task;

describe("Task 6: Pathfinder", () => {
    it("should return null for empty object",
        () => assert.equal(findPath({}), null));

    it("should return null for object without target",
        () => assert.equal(findPath({
            field1: "test",
            field15: "15",
            nil: "nil",
            arr: [64, 48, 19, "pssst"]
        }), null));

    it("Should find target in first level of object props",
        () => assert.equal(findPath({
            field1: "g",
            x: 19,
            6: 15,
            nil: "nil"
        }), "6"));

    it("Should find target in a complex object with array",
        () => assert.equal(findPath({
            field1: "hello, world",
            name: "Johnny",
            t: 99,
            "almost-there": "15",
            subobj: {
                name: 13,
                arr: [
                    { g: -4, k: 1 },
                    { test: NaN, x: 15 }
                ]
            },
            test: "g"
        }), "subobj.arr.1.x"));
});
