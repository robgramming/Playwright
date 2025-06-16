import { test, expect } from '@playwright/test';

test.describe('Dropdown.', () => {
    test('Select an option from the dropdown.', async ({page}) => {
        await page.goto('/dropdown');
        await page.locator('#dropdown').selectOption('2');
        await expect(page.locator('#dropdown option[selected="selected"]')).toContainText('Option 2');
    });
});