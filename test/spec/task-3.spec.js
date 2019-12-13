import chai from "chai";
import task from "../../src/task-3.js";

const assert = chai.assert,
    getBoundingRect = task;

describe("Task 3: Bounding Rectangles", () => {

    it("Should return zeros for no coords case",
        () => assert.deepEqual(
            getBoundingRect([]), {
                top: 0,
                bottom: 0,
                right: 0,
                left: 0
            }
        ));

    it("Boring case",
        () => assert.deepEqual(
            getBoundingRect([
                { x: 49.2382, y: 28.4529 },
                { x: 49.2433, y: 28.4641 },
                { x: 49.2337, y: 28.4715 },
                { x: 49.2365, y: 28.4637 }
            ]), {
                top: 28.4715,
                right: 49.2433,
                bottom: 28.4529,
                left: 49.2337
            }
        ));

    it("One point case",
        () => assert.deepEqual(
            getBoundingRect([{ x: 23.1454, y: 52.1231 }]),
            {
                top: 52.1231,
                right: 23.1454,
                bottom: 52.1231,
                left: 23.1454
            }
        ));

    it("Boring negative values case",
        () => assert.deepEqual(
            getBoundingRect([
                { x: -8.141, y: -9.155 },
                { x: -6.5477, y: -7.7143 },
                { x: -8.0407, y: -6.4022 },
                { x: -9.2639, y: -8.7352 },
                { x: -7.1035, y: -6.6033 }
            ]), {
                top: -6.4022,
                right: -6.5477,
                bottom: -9.155,
                left: -9.2639
            }
        ));

});
