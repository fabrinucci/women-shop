import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Ropa' }).click();
  await page.getByRole('link', { name: 'Ropa' }).click();
  await page.getByRole('link', { name: 'Carteras' }).click();
  await page.getByRole('link', { name: 'Zapatos' }).click();
  await page.getByRole('link', { name: 'Women | Clothes' }).click();

  await expect(page.getByRole('heading', { name: 'Tienda' })).toBeVisible();
});
