import startProgram from '../index.js';
import { getRandomArbitrary, isPrime } from '../utils.js';

function startPrime() {
  const getPrimeQuestionAndResult = () => {
    const number = getRandomArbitrary(1, 100);
    const result = isPrime(number) ? 'yes' : 'no';

    return [number, result];
  };

  startProgram('Answer "yes" if given number is prime. Otherwise answer "no".', getPrimeQuestionAndResult);
}

export default startPrime;
