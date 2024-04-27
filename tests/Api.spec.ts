import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www2.hm.com/sv_se/index.html?orgtld=www.hm.se');
  await page.getByRole('button', { name: 'Tillåt alla cookies' }).click();
  await page.getByRole('link', { name: 'Dam', exact: true }).click();
  await page.getByRole('link', { name: 'Kläder', exact: true }).first().click();
  await page.getByRole('button', { name: 'Oversized linneskjorta -' }).click();
  await page.getByRole('radio', { name: 'XS' }).click();
  await page.getByTestId('pdp_add_to_cart_button').click();
  await page.getByRole('link', { name: 'Shoppingbag (1)' }).click();
});