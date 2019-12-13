import chai from "chai";
import task from "../../src/task-1.js";

const assert = chai.assert,
    sum = task;

describe("Task 1: Summation Machine", () => {
    it("should return zero for zero value",
        () => assert.equal(sum(0), 0));

    it("should return zero for zero values",
        () => assert.equal(sum(0, 0, 0, 0), 0));

    it("Boring case",
        () => assert.equal(sum(1, 2, 3, 4), 10));

    it("Boring case #2",
        () => assert.equal(sum(5, -5, 5, -5, 5, -5, 5, -5), 0));
});
