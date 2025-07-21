import{expect,test}from '@playwright/test';
import { HomePage } from '../pages/homePage';
test.use({ storageState: 'storageState.json' });

let homePage: HomePage;

test('add items to cart', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
    await homePage.setFilterFromLowToHigh();
    await homePage.addItemsToCart();
    await homePage.deleteItem1FromCart();
    await homePage.cartCount("3");
});