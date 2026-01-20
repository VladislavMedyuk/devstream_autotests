import { test } from '@fixtures/test';
import { HomePage } from '@pages/HomePage';
import { deleteUser } from '@src/flows/deleteUser.flow';
import { loginUser } from '@src/flows/loginUser.flow';
import { logoutUser } from '@src/flows/logoutUser.flow';
import { registerUser } from '@src/flows/registerUser.flow';

test('Test Case 2: Login User with correct email and password', async ({ page, user }) => {
  const homePage = new HomePage(page);

  await registerUser(page, user);
  await logoutUser(page);
  await loginUser(page, user);
  await deleteUser(page);

  
});
