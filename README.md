# Lab 8 - Starter
Name: David Wang <br>
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why. <br><br>
The automated tests should be within a Github action that runs whenever code is pushed. That way we can ensure our code is working correctly and following the style guidelines before it's pushed.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no) <br><br>
No, end to end test is used to emulate user actions from start to finish, so we wouldn't use it to check if a function is returning the correct output. Instead, we would use unit test in this case.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user. <br><br>
No, unit test is used to test an individual part of the code, so we wouldn't use it to test the entire "message" feature. Instead, we would use end to end test in this case.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters. <br><br>
Yes, since the "max message length" feature is just a single function, we would use unit test to test it.
