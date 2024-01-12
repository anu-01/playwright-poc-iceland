import {expect, Page, Locator} from '@playwright/test'

export async function assertUrl(page, expectedText){
    await expect(page.url()).toContain(expectedText);
}

export async function assertText(page,selector, expectedText){
await expect(page.locator(selector )).toContainText(expectedText);
// await expect(element.Text).toContainText(expectedText);
}