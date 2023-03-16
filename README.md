
We have a CLI tool that asks the user for a bunch of fields and does something based off of these questions.

These fields have validation around, just like you would see in a normal frontend application for form fields.

The fields and types we have are the following:

- appId: string
- projectName: string
- projectDescription: string
- teamName: string

An example use case is like this:

`node src/index.ts appId="123456" projectName="test-app" projectDescription="testDescription" teamName="my great team"`

1. Add validation to the above fields with the following constraints:

Also Make sure that these error messages are outputted to the user's stdout terminal.

- appId:

must not be empty
must only allow alphanumeric characters

- projectName:

must not be empty
input must have a maximum length of 256 characters
must only allow alphanumeric characters, full stops and hyphens

- projectDescription:

input must not be empty

- teamName:

must not be empty
input must have a maximum length of 64 characters
must only allow alphanumeric characters, full stops and hyphens

2. Write unit tests for the above code.

3. Write integration tests for the above cases to verify that each validation works correctly.