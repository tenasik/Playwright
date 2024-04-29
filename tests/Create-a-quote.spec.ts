import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    test.setTimeout(120000);
    await page.goto('https://daedalus.janniskaranikis.dev/challenges/5-create-a-quote');
//Be yourself; everyone else is already taken. - Oscar Wilde
  await page.$('#item-to-be-dragged');
  await page.getByText('Be',{ exact: true })
  await page.getByRole('list').nth(1)
  await page.getByText('Wilde', { exact: true })
  await page.getByRole('list').nth(1).click();
  await page.getByText('yourself;', { exact: true })
  await page.getByRole('list').nth(1)
  await page.getByText('Oscar', { exact: true })
  await page.getByRole('list').nth(1).click();
  page.getByText('everyone', { exact: true })
  await page.getByRole('list').nth(1)
  await page.getByText('else', { exact: true })
  await page.getByRole('list').nth(1).click();
  await page.getByText('-', { exact: true })
  await page.getByRole('list').nth(1)
  await page.getByText('is', { exact: true })
  await page.getByRole('list').nth(1)
  await page.getByText('taken.', { exact: true })
  await page.getByRole('list').nth(1)
  await page.getByText('already', { exact: true })
  page.getByRole('list').nth(1)
  await page.$('#item-to-drop-at');
});