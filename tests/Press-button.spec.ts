import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(120000);
  await page.goto('https://daedalus.janniskaranikis.dev/challenges/1-press-the-button');

  
  await page.getByRole('button', { name: 'Press Me' }).click();
  await page.getByRole('link').nth(2).click();
});