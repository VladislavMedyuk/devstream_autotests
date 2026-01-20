import { Page, test } from '@playwright/test';
import { SignupPage } from '@pages/SignupPage';
import { HomePage } from '@pages/HomePage';
import { User } from '@helpers/generateUser';

export async function loginUser(page: Page, user: User) {
  const homePage = new HomePage(page);
  const loginPage = new SignupPage(page);

  await test.step('Perform login with email and password', async () => {
    await loginPage.login(user.email, user.password);
  });

  await test.step('Verify user is logged in', async () => {
    await homePage.verifyLoggedInAs(user.name);
  });
}
