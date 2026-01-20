import { test } from '@fixtures/authUser';
import { placeOrder } from '@src/flows/placeOrder.flow';
// import { deleteUser } from '@src/flows/deleteUser.flow';

test(
  'Test Case 16: Place Order: Login before Checkout',
  async ({ page, authUser }) => {

    await placeOrder(page, authUser);

    // await deleteUser(page);
  }
);
