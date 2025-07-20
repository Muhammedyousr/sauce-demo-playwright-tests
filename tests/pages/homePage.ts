import { expect,type Locator,type Page } from "@playwright/test";
export class HomePage {
//****locators */
  readonly page: Page;
  readonly filterList: Locator;
  readonly item1: Locator;
  readonly item2: Locator;  
  readonly cartIcon: Locator; 
//***** constructor */
  constructor(page: Page) {
    this.page = page;

  }
}
