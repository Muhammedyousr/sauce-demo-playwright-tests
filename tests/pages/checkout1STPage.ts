import { expect, type Locator, type Page } from "@playwright/test";

export class Checkout1STPage {
  //**variables */
  readonly baseUrl: string =
    "https://www.saucedemo.com/checkout-step-one.html";

  //**locators */
  readonly page: Page;
  readonly pagetitle: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly postalCode: Locator;
  readonly continueButton: Locator;

  //***** constructor */
  constructor(page: Page) {
    this.page = page;
    this.pagetitle = page.locator('[data-test="title"]');
    this.firstName = page.getByPlaceholder("First Name");
    this.lastName = page.getByPlaceholder("Last Name");
    this.postalCode = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.locator('[data-test="continue"]');
  }
  //****actions */
  async navigateToCheckoutPage() {
    await this.page.goto(this.baseUrl);
  }
  async enterData(firstName: string, lastName: string, postalCode: string) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
  }

  //***** assertions */
  assertPageTitleToBeVisible() {
    expect(this.pagetitle).toBeVisible();
  }
}
