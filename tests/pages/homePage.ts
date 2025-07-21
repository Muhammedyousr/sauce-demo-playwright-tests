import { expect, type Locator, type Page } from "@playwright/test";
export class HomePage {
  //***** variables */
  readonly baseUrl: string = "https://www.saucedemo.com/inventory.html";
  //****locators */
  readonly page: Page;
  readonly filterList: Locator;
  readonly choocedFilter: Locator;
  readonly item1: Locator;
  readonly deleteItem1: Locator;
  readonly item2: Locator;
  readonly shoppingCartBadge: Locator;
  readonly cartIcon: Locator;
  //***** constructor */
  constructor(page: Page) {
    this.page = page;
    this.filterList = page.locator(".product_sort_container");
    this.choocedFilter = page.getByRole("option", {
      name: "Price (low to high)",
    });
    this.item1 = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
    this.item2 = page.locator(
      '[data-test="add-to-cart-sauce-labs-bike-light"]'
    );
    this.deleteItem1 = page.locator('[data-test="remove-sauce-labs-onesie"]');
    this.shoppingCartBadge = page.locator(".shopping_cart_badge");
    this.cartIcon = page.locator(".shopping_cart_link");
  }

  //***** actions*/

  //open home page
  async navigateToHomePage() {
    await this.page.goto(this.baseUrl);
  }

  //set filter from low to high price
  async setFilterFromLowToHigh() {
    await this.filterList.selectOption({ label: "Price (low to high)" });
  }

  async addItem1ToCart() {
    await this.item1.click();
  }

  async addItem2ToCart() {
    await this.item2.click();
  }
  async deleteItem1FromCart() {
    await this.deleteItem1.click();
  }
  async openCart() {
    await this.cartIcon.click();
  }

  //***** assertions */
  //when add elements to cart the badge should be updated 
  async cartCount(expectedCount: string) {
    //this if else is added as if there is no item in the cart the badge should be 0 but its not visible
   if (expectedCount == "0"){
    await expect(this.shoppingCartBadge).toHaveText("0");
   } else {
    await expect(this.shoppingCartBadge).toHaveText(expectedCount);
   }
  }
}
