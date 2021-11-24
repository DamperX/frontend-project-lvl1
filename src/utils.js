export const getRandomArbitrary = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const isEven = (number) => number % 2 === 0;
export const getDividers = (number) => {
  const dividers = [];

  for (let i = 1; i <= number; i += 1) {
    if (number % i === 0) {
      dividers.push(i);
    }
  }

  return dividers;
};
export const getProgression = (start, step, length = 5) => {
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    const currentStep = step * i;
    progression.push(start + currentStep);
  }

  return progression;
};
