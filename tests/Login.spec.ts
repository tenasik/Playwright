import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://daedalus.janniskaranikis.dev/');
  await page.getByRole('link').nth(2).click();
  await page.getByRole('button', { name: 'Press Me' }).click();
  await page.getByRole('link').nth(2).click();
  await page.getByPlaceholder('Enter your username here').click();
  await page.getByPlaceholder('Enter your username here').fill('Admin');
  await page.getByPlaceholder('Enter your password here').click();
  await page.getByPlaceholder('Enter your password here').fill('SafePass123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link').nth(2).click();
 

});

  
  