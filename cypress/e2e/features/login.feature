Feature: Login page
        Feature login page will work depending on the user credentials.

    Scenario: Success Login
    Given A web browser is at the saucelabs login page
    When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
    Then the url will contains the inventory subdirectory

