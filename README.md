## Introduction

This test app is just a simple nodejs & typescript app.

The idea of the take home test is just to familiarize yourself with the code and not spend more than 1 hour on the challenge.

We will do a 45 min pair programming exercise with your solution to see what can be made better or extend the code to add extra functionality.

## Challenge

We have a CLI tool in src/index.ts asks the user a question and returns an answer and logs it to the console.

1. Add validation fields for `appId` that satisfy the following:

- must not be empty
- must only allow alphanumeric (0-9,A-Z,a-z) characters

2. Add validation fields for `projectName` that satisfy the following:

- must not be empty
- input must have a maximum length of 256 characters

3. Make sure that these error messages are outputted to the user's stdout terminal using console.log().

4. If validation for a field fails then we should not prompt the user for the next question and answer.

`npm run start` to run the app.
