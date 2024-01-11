import { test, expect } from '@playwright/test';
import LoginPage from './pages/loginPage.ts';
import { log } from 'console';

test('test @bvt', async ({ page }) => {
  let loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.enterUsername('standard_user');
  await loginPage.enterPassword('secret_sauce');
  await loginPage.clickLoginBtn();
  await loginPage.verifyLogin();
});