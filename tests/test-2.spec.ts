import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Community1' }).click();
  await expect(page.locator('#ambassadors')).toContainText('Ambassadors');
  await expect(page.locator('#github')).toContainText('GitHub');
  await expect(page.locator('#contributing')).toContainText('Contributing');
});