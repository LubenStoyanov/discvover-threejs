export const getRandomPosition = (): [number, number, number] => {
  const randomNumber1 = Math.floor(Math.random() * 10);
  const randomNumber2 = Math.floor(Math.random() * 10);
  const randomNumber3 = Math.floor(Math.random() * 10);
  return [randomNumber1, randomNumber2, randomNumber3];
};
