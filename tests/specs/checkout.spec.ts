import {expect,test} from '@playwright/test';
import { CheckoutPage } from '../pages/checkoutPage';

test('check checkout page', async ({ page }) => {
    let checkoutPage: CheckoutPage;
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.navigateToCheckoutPage();
    await checkoutPage.calculations();
    await checkoutPage.finishOrder();
});