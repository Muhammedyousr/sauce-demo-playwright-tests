// global-setup.ts
import { chromium } from '@playwright/test';
import { LoginPage } from './tests/pages/loginPage';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.assertAppLogoToBeVisible();

  // ✅ حفظ الجلسة
  await context.storageState({ path: 'storageState.json' });

  await browser.close();
}

export default globalSetup;
