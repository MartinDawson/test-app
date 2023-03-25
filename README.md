## Introduction

This test app is just a simple nodejs & typescript app.

The idea of the take home test is just to familiarize yourself with the codebase before we do the live pairing exercise, it's meant to be simple and not to spend more than 1 hour on this test app.

We will do a 45 min pair programming exercise with your solution on a call after to see what can be made better or extend the code to add extra functionality.

## To run
Make sure you have Node installed. I tested this with Node v18.13.0

`npm install`
`npm run start`

## Challenge

`npm run start` to run the app.

We have a CLI tool in src/index.ts that asks the user a question and returns an answer and logs it to the console.

1. Add validation for the field `appId` that satisfy the following:

- must not be empty
- must only allow alphanumeric (0-9,A-Z,a-z) characters

2. Add validation for the field `projectName` that satisfy the following:

- must not be empty
- input must have a maximum length of 256 characters

3. Make sure that these error messages are outputted to the user's stdout terminal using console.log().

4. If validation for a field fails then we should not prompt the user for the next question and answer.

So for example:

If you run `npm run start` and press `Enter` without inputting any value, the terminal should output a message saying `AppId must not be empty` and the terminal will exit as it should have failed the `must not be empty` validation constraint.