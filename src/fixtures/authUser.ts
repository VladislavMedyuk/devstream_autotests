import { test as base } from '@playwright/test';
import { generateUser } from '@helpers/generateUser';
import { registerUser } from '@src/flows/registerUser.flow';
import { User } from '@src/types/user';

export const test = base.extend<{
  authUser: User;
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
  authUser: async ({ page }, use) => {
    const user = generateUser();

    await registerUser(page, user);

    await use(user);
  },
});
