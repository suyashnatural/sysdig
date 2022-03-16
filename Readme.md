## Install cypress
npm install cypress --save-dev

## Run the cypress scripts
1. ./node_modules/.bin/cypress open  
2. click on the "Login.js" script on the window

## UI Test Scenarios for Login Page
1. Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page.
2. Check that the font type and size of the labels and the text written on the different elements should be clearly visible.
3. Verify that the size, color, and UI of the different elements are as per the specifications.
4. Verify that the application’s UI is responsive i.e. it should adjust to different screen resolutions and devices.
5. Check if the SVG images and favicon is loaded when the page is requested

## Functional Test Scenarios for Login Page (Automated)
1. Test EU Login
2. Test US East Login
3. Test US West Login
4. Test Asia Pacific (AP) Login
5. Test Invalid Login
6. Test Forgot Password Link - Invalid
7. Test Forgot Password Link - Valid
8. Test the SSO Login using Google
9. Test the SAML Login using valid company credentials
10. Test the OpenID Login using valid company credentials

## Security Test Cases for Login Page
1. Verify that there is a limit on the total number of unsuccessful login attempts. So that a user cannot use a brute-force mechanism to try all possible combinations of username-password.

2. Verify that in case of incorrect credentials, a message like “incorrect username or password” should get displayed. Instead of an exact message pointing to the incorrect field. This is because a message like “incorrect password” will help a hacker in knowing that the username is correct. In this way, he will just need to try a different combination on the password field only.

3. Verify the login session timeout duration. So, that once logged-in a user cannot be authenticated for a life-time.

4. Verify that once logged in, clicking the back button doesn’t logout the user.

5. Verify if SQL Injection attacks work on the login page. The application should not be vulnerable to SQL injection attacks.

6. Verify that XSS vulnerability should not work on the login page.

## Session Test Cases for Login Page
1. After logout if user clicks on back button user should not be able to login within same session, it should redirect to login page
2. Maximum Session out time should be set for Secured website

## Browser Test Cases for Login Page
1. If Browser cookies are cleared and user tries to login, the system should ask for credentials again.
2. ‘Remember Form Data’ setting of the browser should not remember the password
3. Validate the login functionality when browser cookies are turned OFF

## Compatability Test Cases for Login Page
1. Check if everything works in different browsers

## Performance Test Cases for Login Page
1. Verify the Login Page load time is less than 5 secs viz. SLA (Service Level Agreement) for Page load time = 5 secs.