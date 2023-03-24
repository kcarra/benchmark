import { Benchmark } from "../lib";
import worker from "node:worker_threads";

describe("Benchmark", () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("it throws an error when isMainThread is false", () => {
        jest.replaceProperty(worker, "isMainThread", false);

        expect(Benchmark).toThrow(
            "Benchmark is designed to be initialized in the main thread"
        );
    });
});
