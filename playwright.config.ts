import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',

  timeout: 60000,

  expect: {
    timeout: 5000,
  },

  use: {
    baseURL: 'https://automationexercise.com',

    headless: true,

    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },

    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [
    ['html', { open: 'never' }],
  ],

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
