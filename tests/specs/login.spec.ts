import{expect,test}from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

//******variables   */
let loginPage: LoginPage;

//***** hooks */
test.beforeEach('navigate to login page', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

    //test unsuccessful login with invalid credentials and error messsage assertion
    test('login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'invalid_password');
        await loginPage.assertErrorMessageToBeVisible();
    });

   
    //test successful login and save session to avoid re-login every step
    test('login with valid credentials and save session', async ({ page }) => {

        //login with valid credentials
        
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertAppLogoToBeVisible();


        //save cookies and local storage
        await page.context().storageState({ path: 'storageState.json' });
    });

