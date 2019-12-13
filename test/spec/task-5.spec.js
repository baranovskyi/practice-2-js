import chai from "chai";
import commands from "./roverMoves.js";
import task from "../../src/task-5.js";

const assert = chai.assert,
    boundingRover = task;

describe("Task 5: Bounding Curious Opportunities", () => {

    it("Don't move and hands up!",
        () => assert.deepEqual(
            boundingRover([]),
            { top: 0, right: 0, bottom: 0, left: 0 }
        ));

    it("Zero cases",
        () => assert.deepEqual(
            boundingRover([commands.zero, commands.bullshit]),
            { top: 0, right: 0, bottom: 0, left: 0 }
        ));

    it("Boring case with zero cases",
        () => assert.deepEqual(
            boundingRover([commands.zero, commands.bullshit, commands.boring1]),
            { top: 5, right: 0, bottom: 0, left: -1 }
        ));

    it("Several boring cases #1",
        () => assert.deepEqual(
            boundingRover([commands.boring1, commands.boring2]),
            { top: 5, right: 17, bottom: -39, left: -1 }
        ));

    it("Several boring cases #2",
        () => assert.deepEqual(
            boundingRover([commands.boring3, commands.boring2, commands.boring1]),
            { top: 20, right: 50, bottom: -39, left: -1 }
        ));

});
