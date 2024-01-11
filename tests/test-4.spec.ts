import { test, expect } from '@playwright/test';
import LoginPage from './pages/loginPage.ts';
import { log } from 'console';

test('test', async ({ page }) => {
  let loginPage = new LoginPage(page);
  loginPage.open();
  loginPage.enterUsername('standard_user');
  loginPage.enterPassword('secret_sauce');
  loginPage.clickLoginBtn();
  loginPage.verifyLogin();
});