import { test, expect } from "@playwright/test";
import { CartPage } from "../pages/cartPage";
test.use({ storageState: "storageState_with_cart.json" });
let cartPage: CartPage;

test("check cart then go to checkout", async ({ page }) => {
    //we need to add the items to the cart first as 
  cartPage = new CartPage(page);
  await cartPage.navigateToCartPage();
  await cartPage.assertPageTitleToBeVisible();
  await cartPage.clickCheckoutButton();
});
