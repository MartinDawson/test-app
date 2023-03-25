import { createInterface } from 'readline';
import { fields } from './mocks';

const rl = createInterface({ input: process.stdin, output: process.stdout });

const promptQuestion = (query: string) => new Promise((resolve) => rl.question(query, resolve));

export type Field = {
  name: string;
}

export const getAnswersToQuestionsFromUser = async (fields: Field[]) => {
  let values: string[] = []

  for (let index = 0; index < fields.length; index++) {
    const field = fields[index];
    const value = await promptQuestion(`What's your ${field.name}? `) as string

    values.push(value)
  }

  return values;
}

(async () => {
  try {
    const answers = await getAnswersToQuestionsFromUser(fields);

    console.log(...answers);
  } catch (e) {
    console.error("Unable to prompt", e);
  } finally {
    rl.close();
  }
})();

rl.on('close', () => process.exit(0));
