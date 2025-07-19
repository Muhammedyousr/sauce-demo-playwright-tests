import { expect,type Locator,type Page } from "@playwright/test";
export class LoginPage {
    //****locators */
  readonly page: Page;
  readonly userNameField: Locator;
  readonly passwordField: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  //****variables */

  readonly baseUrl :string = 'https://www.saucedemo.com/';
  readonly errorMessageText :string = 'Epic sadface: Username and password do not match any user in this service';
  readonly appLogo: Locator;

//***** constructor */
  constructor(page: Page) {
    this.page = page;
    this.userNameField = page.getByPlaceholder('Username');
    this.passwordField = page.locator('input[type="password"]');
    this.loginButton = page.locator('[name="login-button"]');
    this.errorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
    this.appLogo = page.locator('.app_logo');

  }
//***** actions*/
async navigateToLoginPage() {
    await this.page.goto(this.baseUrl)
}
  async login(userName : string, password: string) {
    await this.userNameField.fill(userName);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

//***** assertions */  
    async assertErrorMessageToBeVisible() {
        await expect(this.errorMessage).toHaveText(this.errorMessageText);
    }
    async assertAppLogoToBeVisible() {
        await expect(this.appLogo).toBeVisible();
    }
}
