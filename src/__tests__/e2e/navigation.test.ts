import { test, expect } from '@playwright/test';

test.describe.parallel('Test navigation', () => {
  test('Should navigate to correct links', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: 'Remeras' }).click();
    await page.waitForURL('/categoria/remeras');
    await expect(page).toHaveURL('/categoria/remeras');

    await page.getByRole('link', { name: 'Carteras' }).click();
    await page.waitForURL('/categoria/carteras');
    await expect(page).toHaveURL('/categoria/carteras');

    await page.getByRole('link', { name: 'Abrigos' }).click();
    await page.waitForURL('/categoria/abrigos');
    await expect(page).toHaveURL('/categoria/abrigos');

    await page.getByRole('link', { name: 'Go to home' }).click();
    await page.waitForURL('/');
    await expect(page).toHaveURL('/');
  });
});
