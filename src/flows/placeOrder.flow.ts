import { Page, test } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import { CartPage } from '@pages/CartPage';
import { CheckoutPage } from '@pages/CheckoutPage';
import { User } from '@src/types/user';
import { faker } from '@faker-js/faker';

export async function placeOrder(page: Page, user: User) {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await test.step('Add first product to cart and go to cart page', async () => {
    await homePage.addFirstProductToCart();
    await homePage.goToCart();
  });

  await test.step('Verify cart page and proceed to checkout', async () => {
    await cartPage.verifyCartPageVisible();
    await cartPage.proceedToCheckout();
  });

  await test.step('Verify checkout page and enter comment', async () => {
    await checkoutPage.verifyCheckoutPageVisible();
    await checkoutPage.enterComment(faker.lorem.sentence());
    await checkoutPage.clickPlaceOrder();
  });

  await test.step('Fill payment details and confirm order', async () => {
    await checkoutPage.verifyPaymentFormVisible();
    await checkoutPage.fillPaymentDetails(user.payment);
    await checkoutPage.confirmOrder();
  });

  await test.step('Verify order success', async () => {
    await checkoutPage.verifyOrderSuccess();
  });
}
