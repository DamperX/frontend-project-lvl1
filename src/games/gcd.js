import startProgram from '../index.js';
import { getRandomArbitrary, getDividers } from '../utils.js';

function startGcd() {
  const getMaxCoomonValue = (firstArray, secondArray) => {
    let result = 1;
    firstArray.forEach((item) => {
      if (secondArray.includes(item) && item > result) {
        result = item;
      }
    });

    return result;
  };

  const getGcdQuestAndResults = () => {
    const firstNumber = getRandomArbitrary(1, 100);
    const secondNumber = getRandomArbitrary(1, 100);
    const question = `${firstNumber} ${secondNumber}`;

    const firstNumberDividers = getDividers(firstNumber);
    const secondNumberDividers = getDividers(secondNumber);

    const result = getMaxCoomonValue(firstNumberDividers, secondNumberDividers);

    return [question, result.toString()];
  };

  startProgram('Find the greatest common divisor of given numbers.', getGcdQuestAndResults);
}

export default startGcd;
