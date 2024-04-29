import { test, expect } from '@playwright/test';


test('slow test', async ({ page }) => {
  test.slow(); // Easy way to triple the default timeout
  // ...
});

test('test', async ({ page }) => {
  test.setTimeout(120000);
  // ...
});

test ("select a dropdown based on value", async ({page})=>{
    test.setTimeout(120000);
  await page.goto('https://daedalus.janniskaranikis.dev/challenges/3-mr-robot');

  const buttons=await page.$$('.button');

await page.getByText('button').click({ position: { x: 36, y: 14 } });
await page.getByText('button').click({ position: { x: 36, y: 14 } });

const drink = await page.$ ("#drink")
    await drink?.selectOption("4") 
await page.$('Fanta');
    page.locator('Fanta').click;



     
});









 