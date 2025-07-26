import { chromium } from '@playwright/test';
import fs from 'fs';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  // Add items to cart
  await page.click('[data-test="add-to-cart-sauce-labs-onesie"]');
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // Save session
  await context.storageState({ path: 'storageState_with_cart.json' });

  await browser.close();
})();
// This script logs in to the Sauce Demo website, adds items to the cart, and saves the session state including the cart.
//npx tsx scripts/saveCartState.ts
