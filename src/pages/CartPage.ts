import { Page, expect } from '@playwright/test';
import { CartPageLocators as L } from '@src/locators/locators';

export class CartPage {
  constructor(private page: Page) {}

  async verifyCartPageVisible() {
    await expect(this.page.getByText(L.title)).toBeVisible();
  }

  async proceedToCheckout() {
    await this.page.getByText(L.proceedToCheckoutButton).click();
  }
}
