# BadBankExercise
This banking application is a static website created using React and deployed through Amazon Web Services (an Amazon S3 Bucket). It was assigned in the MITxPro Full Stack Developer program.

The web page can be viewed here.

The following was required for the assignment:

<ol>
<li>Navigation Bar
<ul><li>Includes Create Account, Deposit, Withdraw, All Data, and Home pages
Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page.</li> 
<li>Styled with Bootstrap</li>
<li>Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page.</li>
<li>Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.</li></ul></li>
<li>Home Page
<ul><li>Includes bank title, image, and a welcome message.</li>
<li>Styled as a Bootstrap card.</li></ul></li>
<li>Create Account Page
<ul><li>Includes a Bootstrap card with a form that has:
<ul><li>Name input field</li>
<li>Email address input field</li>
<li>Password input field</li>
<li>Create account button</li></ul></li></ul></li></ol>

4. Create Account Page Functionality

Create account page should include the following functionality:
Success message: Upon selecting the create account button the user should see a success message. 
Add Another Account Button: Upon selecting the create account button, the user should see an add another account button. 
Cleared Create Account Form: Upon selecting the create account button, t will open a cleared create account form.
Name validation: The user receives an alert if the name field is left blank. 
Email validation: The user receives an alert if this field is blank 
Password validation: The user receives an alert if the password is less than 8 characters long. 
Disable submit button if nothing is inputted
5. Deposit Page

Includes a Bootstrap card with a form that has:
Deposit input field 
Deposit button 
Balance information displays above deposit form on the card
6. Deposit Page Functionality

Deposit page should include the following functionality:
Updated Balance: When a user deposits, the balance updates. 
Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received. 
Not A Number Alert: User receives an alert if they add something that is not a number. 
Negative Deposit Alert: User receives an alert if they try to deposit a negative number.
Disable deposit button if nothing is input
7. Withdraw Page

Includes a Bootstrap card with a form that has:
Withdraw input field 
Withdraw button 
Balance information displays above deposit form on the card
8. Withdraw Page Functionality

Withdraw page should include the following functionality:
Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance. 
Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed. 
Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.
Not A Number Alert: User receives an alert if they add something that is not a number. 
Disable deposit button if nothing is input
9. All Data Page Functionality

All Data page includes the following functionality:
Track User Submissions: All user submissions appear on All Data page.
All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.Usage
Download or clone the files in this repository to run locally.

Future Improvements
This was a one-time assignment and will not be improved upon.

License
MIT License

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
