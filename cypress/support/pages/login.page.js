class LoginPage {
    visitLoginPage() {
      cy.visit("https://www.saucedemo.com/"); 
    }
  
    enterUsername(username) {
      cy.get("#user-name").type(username); 
    }
  
    enterPassword(password) {
      cy.get("#password").type(password); 
    }
  
    clickLoginButton() {
      cy.get("#login-button").click(); 
    }
  
    verifyLoginSuccess() {
      cy.url().should("contains", "/inventory.html"); 
    }
  }
  
  export default LoginPage;
  