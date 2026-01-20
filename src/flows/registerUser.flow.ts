import { Page, test } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { SignupPage } from '@pages/SignupPage';
import { User } from '@src/types/user';

export async function registerUser(page: Page, user: User) {
  const homePage = new HomePage(page);
  const signupPage = new SignupPage(page);

  await test.step('Open home page and navigate to Signup/Login', async () => {
    await homePage.open();
    await homePage.navigateToSignup();
  });

  await test.step('Verify new user signup form and enter basic details', async () => {
    await signupPage.verifyNewUserSignupVisible();
    await signupPage.signUp(user.name, user.email);
  });

  await test.step('Fill account information (password, title, DOB, subscriptions)', async () => {
    await signupPage.verifyEnterAccountInfoVisible();
    await signupPage.fillAccountInformation(user.password, user.title, user.dob);
  });

  await test.step('Fill address information and create account', async () => {
    await signupPage.fillAddressInformation(user.address);
    await signupPage.createAccount();
  });

  await test.step('Verify user is logged in', async () => {
    await homePage.verifyLoggedInAs(user.name);
  });
}
