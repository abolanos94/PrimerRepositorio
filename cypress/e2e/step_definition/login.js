import {
Given,
When,
Then,
} from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from "../../support/pages/login.page";

const loginPage = new LoginPage(); 

Given("A web browser is at the saucelabs login page", () => {

    loginPage.visitLoginPage();    
    
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.clickLoginButton();
});
//


Then("the url will contains the inventory subdirectory",()=>{
    loginPage.verifyLoginSuccess();
});