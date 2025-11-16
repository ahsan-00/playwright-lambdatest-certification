import { PlaywrightTestConfig } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: 1,
  workers: 4,

  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
        browserName: "chromium",
        browserVersion: "latest",
        "LT:Options": {
          platform: "Windows 11",
          build: "Playwright Certification Build",
          name: "Playwright Sample Test",
          user: LT_USERNAME,
          accessKey: LT_ACCESS_KEY,
          network: true,
          consoleLogs: "info",
          video: true,
          screenshot: true
        }
      }))}`,
    },
  },
};

export default config;
