import startProgram from '../index.js';
import { getRandomArbitrary, isEven } from '../utils.js';

function startEven() {
  const getEvenQuestionAndResult = () => {
    const number = getRandomArbitrary(1, 100);
    const result = isEven(number) ? 'yes' : 'no';

    return [number, result];
  };

  startProgram('Answer "yes" if the number is even, otherwise answer "no".', getEvenQuestionAndResult);
}

export default startEven;
