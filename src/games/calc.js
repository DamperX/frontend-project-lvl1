import { getRandomArbitrary } from '../utils.js';
import startProgram from '../index.js';

const signVariants = ['+', '-', '*'];

function startCalc() {
  const getCalcQuestAndResult = () => {
    const first = getRandomArbitrary(1, 100);
    const second = getRandomArbitrary(1, 100);
    const sign = signVariants[getRandomArbitrary(0, signVariants.length)];

    const question = `${first} ${sign} ${second}`;
    let result;

    switch (sign) {
      case '+':
        result = first + second;
        break;
      case '-':
        result = first - second;
        break;
      case '*':
        result = first * second;
        break;
      default:
        result = first + second;
        break;
    }

    return [question, result.toString()];
  };

  startProgram('What is the result of the expression?', getCalcQuestAndResult);
}

export default startCalc;
