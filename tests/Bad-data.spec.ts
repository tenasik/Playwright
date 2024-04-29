import { test, expect } from '@playwright/test';
import { STATUS_CODES } from 'http';

  
test('test', async ({ page }) => {
    test.setTimeout(120000);

    const testDataJSON = [
      {
          "name": "Richard",
          "age": 31
      },
      {
          "name": "Dinesh",
          "age": 33
      },
      {
          "name": "Gilfoyle",
          "age": 35
      },
      {
          "name": "Bighead",
          "age": 29
      },
      {
          "name": "Jared",
          "age": 41
      }
  ];
  const myJSON = JSON.stringify(testDataJSON)

    await page.route('https://daedalus.janniskaranikis.dev/api/users', route => route.fulfill({
      status: 200,
      body: myJSON,
    }));
  await page.goto('https://daedalus.janniskaranikis.dev/challenges/4-bad-data');
  await page.getByText('The data we are fetching from').click();
  await page.getByText('Name').click();
  await page.getByText('Age', { exact: true }).click();
  await page.getByText('Richard').click();
  page.locator('41').click;
  
  
});
 
  