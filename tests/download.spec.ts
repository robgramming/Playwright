import { Download, test } from '@playwright/test';

test.describe("Download Test", () => {
    test("should automatically download to local disk", async ({page}) => {
        const downloadPromise:Promise<Download> = page.waitForEvent('download');

        await page.goto('/download');
        await page.locator('.example a[href="download/dummy.pdf"]').click();

        const download:Download = await downloadPromise;
        await download.saveAs('./' + download.suggestedFilename());
    });
});