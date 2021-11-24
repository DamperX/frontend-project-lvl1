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
