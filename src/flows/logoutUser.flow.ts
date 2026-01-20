// src/flows/logoutUser.flow.ts
import { Page, test } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { SignupPage } from '@src/pages/SignupPage';

export async function logoutUser(page: Page) {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  await test.step('Verify that logout link is visible', async () => {
    await homePage.verifyLogoutVisible();
  });

  await test.step('Click logout link', async () => {
    await homePage.clickLogout();
  });

  await test.step('Verify login form is visible after logout', async () => {
    await signupPage.verifyLoginFormVisible();
  });
}
