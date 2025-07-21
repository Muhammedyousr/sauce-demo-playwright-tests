import{ expect, type Locator, type Page} from '@playwright/test';

export class CartPage {
  //***** variables */
  readonly baseUrl: string = "https://www.saucedemo.com/cart.html";
  //****locators */
  readonly page: Page;
  readonly pagetitle: Locator;
  readonly checkoutButton: Locator;

  //***** constructor */
  constructor(page: Page) {
    this.page = page;
    this.pagetitle = page.locator('[data-test="title"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }
  //***** actions */
  async navigateToCartPage() {
    await this.page.goto(this.baseUrl);
  }
  async clickCheckoutButton() {
      await this.checkoutButton.click();
  }
  //***** assertions */
  async assertPageTitleToBeVisible() {
    await expect(this.pagetitle).toBeVisible();
  }
}