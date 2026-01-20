// src/fixtures/test.ts
import { test as base } from '@playwright/test';
import { generateUser } from '@helpers/generateUser';

export const test = base.extend<{
  user: ReturnType<typeof generateUser>;
}>({
  page: async ({ page }, use) => {
    await page.route('**/*', route => {
      const url = route.request().url();

      if (
        url.includes('ads') ||
        url.includes('doubleclick') ||
        url.includes('googlesyndication') ||
        url.includes('google-analytics')
      ) {
        route.abort();
      } else {
        route.continue();
      }
    });

    await use(page);
  },

  user: async ({}, use) => {
    const user = generateUser();
    await use(user);
  },
});
