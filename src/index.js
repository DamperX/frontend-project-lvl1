import readlineSync from 'readline-sync';
import start from './games/cli.js';

function startProgram(description, getQuestAndResolt, attemptsCount = 3) {
  let attemptNumber = 0;
  const name = start();

  console.log(description);

  do {
    const [quest, correctResult] = getQuestAndResolt();
    console.log(`Question: ${quest}`);
    const userResult = readlineSync.question('Your answer: ');

    if (userResult === correctResult) {
      console.log('Correct!');
      attemptNumber += 1;
    } else {
      console.log(`'${userResult}' is wrong answer ;(. Correct answer was '${correctResult}'. Let's try again, ${name}!`);
      return;
    }
  } while (attemptNumber < attemptsCount);

  console.log(`Congratulations, ${name}!`);
}

export default startProgram;
