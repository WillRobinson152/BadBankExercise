# Bad Bank Exercise
This banking application is a static website created using React and deployed through Amazon Web Services (an Amazon S3 Bucket). It was assigned in the MITxPro Full Stack Developer program. It is called a "bad" bank because the site has no security.

<strong>The web page can be viewed <a href="http://willrobinson-bankingapp.s3-website-us-east-1.amazonaws.com/#/">here</a>.</strong>

The following was required for the assignment:

<ol>
  <li><strong>Navigation Bar</strong>
    <ul>
      <li>Includes Create Account, Deposit, Withdraw, All Data, and Home pages.</li>
      <li>Routing: Each navigation bar item routes the user to the relevant page. For example, by selecting Home the user should be directed to the Home page.</li> 
      <li>Styled with Bootstrap</li>
      <li>Highlighting: Each navigation bar item is highlight when you are on that page. For example, Home is highlighted when you are on the home page.</li>
      <li>Hover effect: When your mouse hovers over a navigation bar item, you see a pop up with a description of that page.</li>
    </ul>
  </li>
  
  <li><strong>Home Page</strong>
    <ul>
      <li>Includes bank title, image, and a welcome message.</li>
      <li>Styled as a Bootstrap card.</li>
    </ul>
  </li>
  
  <li><strong>Create Account Page</strong>
    <ul>
      <li>Includes a Bootstrap card with a form that has:
        <ul>
          <li>Name input field</li>
          <li>Email address input field</li>
          <li>Password input field</li>
          <li>Create account button</li>
        </ul>
      </li>
    </ul>
  </li>
  
  <li><strong>Create Account Page Functionality</strong>
    <ul>
      <li>Create account page should include the following functionality:
        <ul>
          <li>Success message: Upon selecting the create account button the user should see a success message.</li> 
          <li>Add Another Account Button: Upon selecting the create account button, the user should see an add another account button.</li>
          <li>Cleared Create Account Form: Upon selecting the create account button, it will open a cleared create account form.</li>
          <li>Name validation: The user receives an alert if the name field is left blank.</li> 
          <li>Email validation: The user receives an alert if this field is blank</li>
          <li>Password validation: The user receives an alert if the password is less than 8 characters long.</li>
          <li>Disable submit button if nothing is inputted</li>
        </ul>
      </li>
    </ul>
   </li>
  
  <li><strong>Deposit Page</strong>
    <ul>
      <li>Includes a Bootstrap card with a form that has:
        <ul>
          <li>Deposit input field</li>
          <li>Deposit button</li>
          <li>Balance information displays above deposit form on the card</li>
        </ul>
      </li>
    </ul>
  </li>

  <li><strong>Deposit Page Functionality</strong>
    <ul>
      <li>Deposit page should include the following functionality:
        <ul>
          <li>Updated Balance: When a user deposits, the balance updates.</li>
          <li>Success Message: When a user completes the deposit form, they receive a success message confirming their deposit was received.</li>
          <li>Not A Number Alert: User receives an alert if they add something that is not a number.</li>
          <li>Negative Deposit Alert: User receives an alert if they try to deposit a negative number.</li>
          <li>Disable deposit button if nothing is input</li>
        </ul>
      </li>
    </ul>
  </li>
  
  <li><strong>Withdraw Page</strong>
    <ul>
      <li>Includes a Bootstrap card with a form that has:
        <ul>
          <li>Withdraw input field</li>
          <li>Withdraw button</li>
          <li>Balance information displays above deposit form on the card</li>
        </ul>
      </li>
    </ul>
  </li>
  
  <li><strong>Withdraw Page Functionality</strong>
    <ul>
      <li>Withdraw page should include the following functionality:
        <ul>
          <li>Updated Balance: When a user completes the withdrawal form, the number submitted is subtracted from the total balance.</li>
          <li>Success Message: When a user completes the withdrawal form, they receive a success message confirming that their withdraw was processed.</li>
          <li>Account Overdraft Feature: When a user withdraws a number higher than the account balance, the user receives an alert message on the withdraw page.</li>
          <li>Not A Number Alert: User receives an alert if they add something that is not a number.</li>
          <li>Disable deposit button if nothing is input</li>
        </ul>
      </li>
    </ul>
  </li>
  
  <li><strong>All Data Page Functionality</strong>
    <ul>
      <li>All Data page includes the following functionality:
        <ul>
          <li>Track User Submissions: All user submissions appear on All Data page.</li>
          <li>All Data Displayed On Bootstrap Card: All Data is styled and displayed on a Bootstrap card instead of JSON.</li>
        </ul>
      </li>
    </ul>
  </li>
</ol>

# Usage
Download or clone the files in this repository to run locally.

# Future Improvements
This was a one-time assignment and will not be improved upon.

# License
MIT License

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
