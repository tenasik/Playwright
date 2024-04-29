import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://daedalus.janniskaranikis.dev/challenges/6-countersign');
  await page.getByText('You got your passcode but').click();
  await page.getByText('/api/getkey').click();
  await page.getByText('POST').click();
  await page.getByText('plain text').click();
  await page.getByText('You got your passcode but').click();
  await page.getByLabel('Your Response').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});