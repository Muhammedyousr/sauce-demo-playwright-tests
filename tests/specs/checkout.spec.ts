import {expect,test} from '@playwright/test';
import { CheckoutPage } from '../pages/checkoutPage';
test.use({
  storageState: 'storageState_with_cart.json' // السيشن المتسجلة
});
test('check checkout page', async ({ page }) => {
    let checkoutPage: CheckoutPage;
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.navigateToCheckoutPage();
    await checkoutPage.calculations();
    await checkoutPage.finishOrder();
});