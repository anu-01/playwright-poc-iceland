import {Page, Locator, expect} from "@playwright/test"
import { BasePage } from "./basePage.ts"

export default class LoginPage extends BasePage{

    // readonly page: Page
    readonly email: Locator
    readonly password: Locator
    readonly loginBtn: Locator

    constructor(page: Page){
        super(page)
        this.email = this.page.getByTestId('username')
        this.password = this.page.getByTestId('password')
        this.loginBtn = this.page.getByTestId('login-button')
    }

    async open() {
        await this.page.goto('/');
    }
    async enterUsername(strUser: string) {
        await this.email.fill(strUser)
    }
    async enterPassword(strPwd: string) {
        await this.password.fill(strPwd)
    }
    async clickLoginBtn() {
        await this.loginBtn.click()
    }
    async login(strUser: string, strPwd: string) {
        await this.enterUsername(strUser)
        await this.enterPassword(strPwd)
        await this.clickLoginBtn();
    }
    async verifyLogin() {
        const actualUrl = await this.page.url();
        // await assertUrl(this.page, 'inventory.html');
        // await expect(actualUrl).toContain('inventory.html');
        await expect.poll(async () => {
            await this.login('', '');
                    },{          
                        
            message: 'Login was not successful',
            intervals: [2_000, 4_000, 6_000],
            timeout: 60000,
    }).toBeFalsy();               
    }


    async verifyErrorMessage(expectedErrorMessage: string) {
        const actualErrorMessage = await this.page.getByTestId('error').textContent();
        await expect(actualErrorMessage).toBe(expectedErrorMessage);
    }
}