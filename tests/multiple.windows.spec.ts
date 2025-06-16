import { test, expect } from '@playwright/test';

test.describe('Multiple Windows Test.', () => {
    test('Open and verify a new window', async ({page, context}) => {
        await page.goto('/windows');

        let pagePromise = context.waitForEvent('page');
        await page.locator("div#content div.example a[href*='/new']").click();
        let newPage = await pagePromise;
        await expect(newPage).toHaveTitle('New Window');
    });
});