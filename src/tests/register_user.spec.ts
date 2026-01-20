import { test } from '@fixtures/test';
import { registerUser } from '@src/flows/registerUser.flow';
import { deleteUser } from '@src/flows/deleteUser.flow';

test('Test Case 1: Register User', async ({ page, user }) => {
  await registerUser(page, user);
  await deleteUser(page);
});
