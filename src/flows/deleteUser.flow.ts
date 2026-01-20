import { Page, test } from '@playwright/test';
import { HomePage } from '@pages/HomePage';

export async function deleteUser(page: Page) {
  const homePage = new HomePage(page);

  await test.step('Click Delete Account', async () => {
    await homePage.deleteAccount();
  });

  await test.step('Confirm Account Deleted', async () => {
    await homePage.confirmAccountDeleted();
  });
}
