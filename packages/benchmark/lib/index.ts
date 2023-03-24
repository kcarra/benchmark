import { isMainThread } from "node:worker_threads";

const Benchmark = () => {
    if (!isMainThread) {
        throw new Error(
            "Benchmark is designed to be initialized in the main thread"
        );
    }
};

export { Benchmark };
