import { Page, expect } from '@playwright/test';
import { Payment } from '@src/types/user';
import { CheckoutPageLocators as L } from '@src/locators/locators';

export class CheckoutPage {
  constructor(private page: Page) {}

  async verifyCheckoutPageVisible() {
    await expect(
      this.page.getByText(L.addressDetailsTitle)
    ).toBeVisible();

    await expect(
      this.page.getByText(L.reviewOrderTitle)
    ).toBeVisible();
  }

  async enterComment(comment: string) {
    await this.page.locator(L.commentTextarea).fill(comment);
  }

  async clickPlaceOrder() {
    await this.page.getByText(L.placeOrderLink).click();
  }

  async verifyPaymentFormVisible() {
    await expect(
      this.page.locator(L.nameOnCard)
    ).toBeVisible();
  }

  async fillPaymentDetails(payment: Payment) {
    await this.page.locator(L.nameOnCard).fill(payment.nameOnCard);
    await this.page.locator(L.cardNumber).fill(String(payment.cardNumber));
    await this.page.locator(L.cvc).fill(String(payment.cvc));
    await this.page.locator(L.expiryMonth).fill(String(payment.expiryMonth));
    await this.page.locator(L.expiryYear).fill(String(payment.expiryYear));
  }

  async confirmOrder() {
    await this.page.getByText(L.confirmOrderButton).click();
  }

  async verifyOrderSuccess() {
    await expect(
      this.page.locator(L.orderPlacedText)
    ).toBeVisible();
  }
}
