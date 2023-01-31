import { getRandomNum, checkParityNum, gameTemplate } from '../index.js';

const gameCore = () => {
  const ruleSet = 'Answer "yes" if the number is even, otherwise answer "no". ';
  const question = getRandomNum();
  const corAnswer = checkParityNum(question);
  return [ruleSet, question, corAnswer];
};

export { gameCore, gameTemplate };
