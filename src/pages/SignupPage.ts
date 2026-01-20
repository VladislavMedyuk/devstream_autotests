import { Page, expect } from '@playwright/test';
import { SignupPageLocators as L } from '@src/locators/locators';
import { Address, DOB } from '@src/types/user';

export class SignupPage {
  constructor(private page: Page) {}

  async verifyLoginFormVisible() {
    await expect(this.page.getByText(L.loginFormTitle)).toBeVisible();
  }

  async login(email: string, password: string) {
    await this.page.locator(L.loginEmail).fill(email);
    await this.page.locator(L.loginPassword).fill(password);
    await this.page.locator(L.loginButton).click();
  }

  async verifyNewUserSignupVisible() {
    await expect(this.page.getByText(L.newUserSignupTitle)).toBeVisible();
  }

  async verifyEnterAccountInfoVisible() {
    await expect(this.page.getByText(L.enterAccountInfoTitle)).toBeVisible();
  }

  async signUp(name: string, email: string) {
    await this.page.locator(L.signupName).fill(name);
    await this.page.locator(L.signupEmail).fill(email);
    await this.page.locator(L.signupButton).click();
  }

  async fillAccountInformation(password: string, title: 'Mr' | 'Mrs', dob: DOB) {
    await this.page
      .locator(title === 'Mr' ? L.genderMr : L.genderMrs)
      .check();

    await this.page.locator(L.password).fill(password);
    await this.page.locator(L.days).selectOption(dob.day);
    await this.page.locator(L.months).selectOption(dob.month);
    await this.page.locator(L.years).selectOption(dob.year);
    await this.page.locator(L.newsletter).check();
    await this.page.locator(L.optin).check();
  }

  async fillAddressInformation(address: Address) {
    await this.page.locator(L.firstName).fill(address.firstName);
    await this.page.locator(L.lastName).fill(address.lastName);
    await this.page.locator(L.company).fill(address.company);
    await this.page.locator(L.address1).fill(address.address1);
    await this.page.locator(L.address2).fill(address.address2);
    await this.page.locator(L.country).selectOption(address.country);
    await this.page.locator(L.state).fill(address.state);
    await this.page.locator(L.city).fill(address.city);
    await this.page.locator(L.zipcode).fill(address.zipcode);
    await this.page.locator(L.mobile).fill(address.mobile);
  }

  async createAccount() {
    await this.page.locator(L.createAccountButton).click();
    await expect(this.page.getByText(L.accountCreatedText)).toBeVisible();
    await this.page.locator(L.continueButton).click();
  }
}
