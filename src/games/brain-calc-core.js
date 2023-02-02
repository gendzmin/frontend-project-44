import { getRandomNum, gameTemplate } from '../index.js'; // Импортируем функцию-рандомайзер и шаблон из index.js

const gameCore = () => {
  const ruleSet = 'What is the result of the expression?'; // Правила для игры-калькулятора
  const num1 = getRandomNum(); // Получение двух сгенерированных чисел
  const num2 = getRandomNum();
  const operArr = ['+', '-', '*']; // Массив операторов
  const operType = operArr[Math.floor(Math.random() * (3 - 0) + 0)]; // Генер. чис. 0-2 и выбор опер
  const question = `${num1} ${operType} ${num2}`; // Объявление и инициализация строки-вопроса
  let corAnswer = 0; // Объявление переменной правильного ответа и её инициализация через switch
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
  return [ruleSet, question, corAnswer]; // Функция возвращает правила, вопрос и правильный ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
