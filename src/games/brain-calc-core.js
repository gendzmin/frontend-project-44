import gameTemplate from '../index.js'; // Импорт шаблона из index.js
import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const getCorrectAnswer = (operator, num1, num2) => { // Функ, возвр. результат вычисл. с выбр. опер.
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return num1 + num2;
  }
};

const gameCore = () => {
  const ruleSet = 'What is the result of the expression?'; // Правила для игры-калькулятора
  const num1 = getRandomNum(); // Получение двух сгенерированных чисел
  const num2 = getRandomNum();
  const operators = ['+', '-', '*']; // Массив операторов
  const operatorType = operators[getRandomNum(operators.length)]; // Генер. числа 0-2 и выбор опер.
  const question = `${num1} ${operatorType} ${num2}`; // Объявление и инициализация строки-вопроса
  const correctAnswer = getCorrectAnswer(operatorType, num2, num2); // Переменная с прав. ответом
  return [ruleSet, question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
