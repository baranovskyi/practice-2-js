import chai from "chai";
import task from "../../src/task-2.js";

const assert = chai.assert,
    createCounter = task;

describe("Task 2: Counter Factory", () => {
    it("should return a function",
        () => assert.isFunction(createCounter(0)));

    it("should return a correct counter", () => {
        const counter = createCounter(5);

        assert.equal(counter(), 0);
        assert.equal(counter(), 5);
        assert.equal(counter(), 10);
        assert.equal(counter(), 15);
    });

    it("counter should always return zero for zero-counter", () => {
        const counter = createCounter(0);

        assert.equal(counter(), 0);
        assert.equal(counter(), 0);
        assert.equal(counter(), 0);
        assert.equal(counter(), 0);
    });

    it("should create independent counters", () => {
        const counter3 = createCounter(3),
            counter2 = createCounter(-2);

        assert.equal(counter3(), 0);
        assert.equal(counter2(), 0);
        assert.equal(counter3(), 3);
        assert.equal(counter3(), 6);
        assert.equal(counter3(), 9);
        assert.equal(counter2(), -2);
        assert.equal(counter2(), -4);
        assert.equal(counter3(), 12);

    });
});
