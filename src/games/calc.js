import { getRandomArbitrary } from '../utils.js';
import startProgram from '../index.js';

const signVariants = ['+', '-', '*'];

function startCalc() {
  const getCalcResult = (firstOperator, secondOperator, sign = '+') => {
    switch (sign) {
      case '+':
        return firstOperator + secondOperator;
      case '-':
        return firstOperator - secondOperator;
      case '*':
        return firstOperator * secondOperator;
      default:
        return firstOperator + secondOperator;
    }
  };

  const getCalcQuestAndResult = () => {
    const firstNumber = getRandomArbitrary(1, 100);
    const secondNumber = getRandomArbitrary(1, 100);
    const sign = signVariants[getRandomArbitrary(0, signVariants.length)];

    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const result = getCalcResult(firstNumber, secondNumber, sign);

    return [question, result.toString()];
  };

  startProgram('What is the result of the expression?', getCalcQuestAndResult);
}

export default startCalc;
