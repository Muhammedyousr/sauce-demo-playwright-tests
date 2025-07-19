import { expect,type Locator,type Page } from "@playwright/test";
export class HomePage {
//****locators */
  readonly page: Page;
  readonly appLogo: Locator;
//***** constructor */
  constructor(page: Page) {
    this.page = page;
    this.appLogo = page.getByText('Swag Labs');
  }
//***** assertions */  
async assertAppLogoToBeVisible() {
        await expect(this.appLogo).toBeVisible();
    }
}