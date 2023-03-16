const readline = require("readline");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const promptQuestion = (query: string) => new Promise((resolve) => rl.question(query, resolve));

(async () => {
  try {
    const appId = await promptQuestion('What\'s your appId? ');
    const projectName = await promptQuestion('What\'s your projectName? ');
    const projectDescription = await promptQuestion('What\'s your projectDescription? ');
    const teamName = await promptQuestion('What\'s your team name? ');

    console.log(appId, projectName, projectDescription, teamName);
    rl.close();
  } catch (e) {
    console.error("Unable to prompt", e);
  }
})();

rl.on('close', () => process.exit(0));
