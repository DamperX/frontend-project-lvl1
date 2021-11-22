import readlineSync from 'readline-sync';
import start from './cli.js';

const maxQuestionsCount = 3;

const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = (number) => number % 2 === 0;

const name = start();

function startEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let answerCurrentCount = 0;

  do {
    const number = getRandomArbitrary(1, 100);
    const correctResult = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    const userResult = readlineSync.question('Your answer: ');

    if (correctResult === userResult) {
      console.log('Correct!');
      answerCurrentCount += 1;
    } else {
      console.log(`'${userResult}' is wrong answer ;(. Correct answer was '${correctResult}'. Let's try again, ${name}!`);
      break;
    }
  } while (answerCurrentCount < maxQuestionsCount);

  if (answerCurrentCount === maxQuestionsCount) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default startEven;
