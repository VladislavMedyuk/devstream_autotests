import { Page, expect } from '@playwright/test';
import { HomePageLocators as L } from '@src/locators/locators';

export class HomePage {
  constructor(private page: Page) {}

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async navigateToSignup() {
    await this.page.getByText(L.signupLoginLink).click();
  }

  async goToCart() {
    await this.page.getByText(L.cartLink).first().click();
  }

  async verifyLoggedInAs(username: string) {
    await expect(this.page.getByText(L.loggedInAsText))
      .toContainText(username);
  }

  async deleteAccount() {
    await this.page.getByText(L.deleteAccountLink).click();
  }

  async confirmAccountDeleted() {
    await expect(this.page.getByText(L.deletedaccount)).toBeVisible();
    await this.page.locator(L.continueButton).click();
  }

  async verifyLogoutVisible() {
    await expect(this.page.getByText(L.logoutLink)).toBeVisible();
  }

  async clickLogout() {
    await this.page.getByText(L.logoutLink).click();
  }

  async addFirstProductToCart() {
    await this.page
      .locator(L.firstProductAddToCart)
      .first()
      .click();

    await this.page.getByText(L.continueShoppingButton).click();
  }
}
