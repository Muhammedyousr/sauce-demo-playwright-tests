import{expect,test}from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

//******variables   */
let loginPage: LoginPage;

//***** hooks */

test.describe('Login Page Tests', () => {      
    //test unsuccessful login with invalid credentials and error messsage assertion
    test('login with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login('invalid_user', 'invalid_password');
        await loginPage.loginButton.click();
        await loginPage.assertErrorMessageToBeVisible();
    });

   
    //test successful login and save session to avoid re-login every step
    test('login with valid credentials and save session', async ({ page }) => {

        const loginPage = new LoginPage(page);

        //login with valid credentials
        
        await loginPage.navigateToLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertAppLogoToBeVisible();


        //save cookies and local storage
        await page.context().storageState({ path: 'storageState.json' });
    });
});
