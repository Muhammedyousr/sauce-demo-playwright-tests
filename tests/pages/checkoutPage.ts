import { expect,type Locator, type Page } from "@playwright/test";
export class CheckoutPage {
  //***** variables */
  baseUrl: string = "https://www.saucedemo.com/checkout-step-two.html";
  readonly page: Page;

  //***** locators */
  readonly pagetitle: Locator;
  readonly itemsPrices: Locator;
  readonly subtotal: Locator; // item price + item price + ...
  readonly tax: Locator; 
  readonly totalPrice: Locator; //subtotal + tax
  readonly checkoutButton: Locator;
  //***** constructor  */
  constructor(page: Page) {
    this.page = page;
    this.pagetitle = page.locator('[data-test="title"]');
    this.itemsPrices = page.locator('[data-test="inventory-item-price"]');
    this.subtotal = page.locator('[data-test="subtotal-label"]');
    this.tax = page.locator('[data-test="tax-label"]'); 
    this.totalPrice = page.locator('[data-test="total-label"]');
    this.checkoutButton = page.locator('[data-test="finish"]');
  }

  //***** actions */
  async navigateToCheckoutPage() {
    await this.page.goto(this.baseUrl);
  }

  async calculations():Promise<void> {
  const subtotalValue = await this.subtotal.innerText();
  const taxValue = await this.tax.innerText();
  const totalValue = await this.totalPrice.innerText();
 
  const subtotal = parseFloat(subtotalValue.replace("item total: $", ""));
  const tax = parseFloat(taxValue.replace("tax: $", ""));
  const total = parseFloat(totalValue.replace("total: $", ""));
  

  expect(subtotal+ tax).toBeCloseTo(total,2);
  }
  async finishOrder(){
    await this.checkoutButton.click();
    await expect(this.page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");
  }
  }

  //***** assertions */


  
