import{test,expect}from '@playwright/test';
    import { Checkout1STPage } from '../pages/checkout1STPage'; 
    test.use({ storageState: "storageState_with_cart.json" });

    let checkout1STPage: Checkout1STPage;
    
    test("check checkout 1ST page", async ({ page }) => {
        checkout1STPage = new Checkout1STPage(page);
        await checkout1STPage.navigateToCheckoutPage();
        await checkout1STPage.assertPageTitleToBeVisible();
        await checkout1STPage.enterData("firstName", "lastName", "12345");
    });