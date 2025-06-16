import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload Test', () => {
    test('upload a file', async({page}) => {
        let filename:string = "some-file.txt";

        await page.goto('/upload');
        await page.locator('input[type=file][name=file]').setInputFiles(path.join(__dirname, filename));
        await page.locator('input[value=Upload]').click();
        
        await expect(page.locator('#uploaded-files')).toHaveText(filename);
    });
});