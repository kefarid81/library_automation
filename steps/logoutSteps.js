import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";


// WRITE YOUR STEP DEFINITIONS HERE...
Given('user is already logged in as {string}', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  await PageManager.loginPage.login(string);
  
});

When('user clicks the user profile on the top right corner of the page', async function () {
    // Write code here that turns the phrase above into concrete actions
  await PageManager.dashboardPage.userProfileImage.click();
  
});

When('user clicks Log out button', async function () {
  // Write code here that turns the phrase above into concrete actions
  await PageManager.dashboardPage.logoutButton.click();
});

Then('user should be logged out from the app', async function () {
  // Write code here that turns the phrase above into concrete actions
  await expect(PageManager.page).toHaveTitle("Login - Library");
  // await BrowserUtility.sleep(2);
});
