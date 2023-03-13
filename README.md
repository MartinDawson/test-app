
We have a CLI tool that asks the user for a bunch of fields and does something based off of these questions.

These fields have validation around, just like you would see in a normal frontend application for form fields.

The fields and types we have are the following:

- appId: string
- projectName: string
- projectDescription: string

An example use case is like this:

`node src/index.ts appId="123456" projectName="test-app" projectDescription="testDescription"`

1. Write validation conditions for the following conditions in the `validation.ts` file:

- must not be empty
- must only be letters and numbers
- must have a maximum length of 64 characters

Tip: Make sure they are written in a flexible way and are not tied to each other.

2. Write unit tests for the above validation cases in `validation.tes.ts`

3. 

The above fields have the following validation constraints:

- appId: 

must not be empty
must only be letters and numbers

- projectName:

must not be empty
input must have a maximum length of 64 characters

- projectDescription:

input must not be empty

3. Write a function so we can compose the above validation functions together for a field, something like this as an example:

```ts
export const appIdValidation = validator(
    notEmpty,
    onlyLettersAndNumbers,
);

export const projectNameValidation = validator(
    notEmpty,
    maximumLengthOf64Chars,
);

export const projectDescriptionValidation = validator(
    notEmpty,
);
```

Tip: If your validations are tied together and not abstracted into separate functions you will need to refactor them now to do this.

4. Write integration tests for the above cases to verify that each validation works correctly.