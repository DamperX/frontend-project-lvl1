import startProgram from '../index.js';
import { getProgression, getRandomArbitrary } from '../utils.js';

const minProgressionLength = 5;
const maxProgressionLength = 10;
const minProgressionStartNumber = 1;
const maxProgressionStartNumber = 20;
const minProgressionStep = 1;
const maxProgressionStep = 20;

function startProgression() {
  const createProgression = () => {
    const progressionLength = getRandomArbitrary(minProgressionLength, maxProgressionLength);
    const progressionStartNumber = getRandomArbitrary(
      minProgressionStartNumber,
      maxProgressionStartNumber,
    );
    const progressionStap = getRandomArbitrary(minProgressionStep, maxProgressionStep);
    return getProgression(progressionStartNumber, progressionStap, progressionLength);
  };

  const getProgressionAndResult = () => {
    const progressionArray = createProgression();
    const progressionArrayLength = progressionArray.length;
    const progressionRandomIndex = getRandomArbitrary(0, progressionArrayLength);
    const result = progressionArray[progressionRandomIndex];
    progressionArray[progressionRandomIndex] = '..';

    return [progressionArray.join(' '), result.toString()];
  };

  startProgram('What number is missing in the progression?', getProgressionAndResult);
}

export default startProgression;
