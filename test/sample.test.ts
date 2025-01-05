import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { unstable_dev, getPlatformProxy } from "wrangler";
import type { Unstable_DevWorker } from "wrangler";
import app from "../src/index";

const { env } = await getPlatformProxy();

describe("sample test", () => {
  let worker: Unstable_DevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("src/index.ts", {
      experimental: { disableExperimentalWarning: true },
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it("正常系", async () => {
    const res = await app.request(
      "/todos",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
      env
    );
    expect(res.status).toBe(200);
  });
});
