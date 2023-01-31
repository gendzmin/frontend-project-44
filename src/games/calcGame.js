import { getRandomNum, gameTemplate } from '../index.js';

const gameCore = () => {
  const ruleSet = 'What is the result of the expression?';
  const num1 = getRandomNum(); // Сгенерированные числа
  const num2 = getRandomNum();
  const operArr = ['+', '-', '*']; // Массив операторов
  const operGen = () => Math.floor(Math.random() * (3 - 0) + 0); // Функция генерации оператора

  const operType = operArr[operGen()]; // Выбор оператора
  let corAnswer = 0;
  switch (operType) {
    case '+':
      corAnswer = (num1 + num2).toString();
      break;
    case '-':
      corAnswer = (num1 - num2).toString();
      break;
    case '*':
      corAnswer = (num1 * num2).toString();
      break;
    default:
      corAnswer = (num1 + num2).toString();
  }
  const question = `${num1} ${operType} ${num2}`;

  return [ruleSet, question, corAnswer];
};

export { gameCore, gameTemplate };
