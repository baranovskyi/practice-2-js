import chai from "chai";
import commands from "./roverMoves.js";
import task from "../../src/task-4.js";

const assert = chai.assert,
    runRover = task;

describe("Task 4: Curious Opportunities", () => {

    it("Don't move and hands up!",
        () => assert.deepEqual(runRover(commands.zero), { x: 0, y: 0 }));

    it("Bullshit commands",
        () => assert.deepEqual(runRover(commands.bullshit), { x: 0, y: 0 }));

    it("Boring case #1",
        () => assert.deepEqual(runRover(commands.boring1), { x: -1, y: 5 }));

    it("Boring case #2",
        () => assert.deepEqual(runRover(commands.boring2), { x: 17, y: -39 }));

    it("Boring case #3",
        () => assert.deepEqual(runRover(commands.boring3), { x: 50, y: 20 }));

});
