const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const promptQuestion = (query: string) => new Promise((resolve) => rl.question(query, resolve));

const fields = [
  { name: 'appId' },
  { name: 'projectName' },
  { name: 'projectDescription' },
  { name: 'teamName' },
];

(async () => {
  try {
    let values: string[] = []

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const value = await promptQuestion(`What's your ${field.name}? `) as string

      values.push(value)
    }

    console.log(...values);
    rl.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

rl.on('close', () => process.exit(0));
