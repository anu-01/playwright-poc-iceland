import { test as setup, expect } from '@playwright/test';
import LoginPage from './pages/loginPage.ts';
import { StandardUser } from './testdata/creds.ts';

const standardAuth = 'playwright/.auth/standarduser.json'

setup ('Create authenticated state for standarduser', async({page}) =>{

    let loginPage = new LoginPage(page);
    page.goto('/');
    await loginPage.login(StandardUser.username,StandardUser.password);
    await loginPage.verifyLogin();   
    await page.context().storageState({path:standardAuth });
})