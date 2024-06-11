import type {PlaywrightTestConfig} from '@playwright/test';
import {devices} from '@playwright/test';
const PORT = process.env.CI ? 3001 : 3000;
const config: PlaywrightTestConfig = {
  retries: process.env.CI ? 1 : 0,
  testDir: './tests',
  projects: [
    {
      name: 'chromium',
      use: devices['Desktop Chrome']
    }
  ],
  webServer: {
    command: `PORT=${PORT} pnpm start`,
    port: PORT,
    reuseExistingServer: true
  }
};

export default config;
