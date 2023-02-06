import gameTemplate from '../index.js'; // Импорт шаблона из index.js
import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const gameCore = () => {
  const ruleSet = 'What is the result of the expression?'; // Правила для игры-калькулятора
  const num1 = getRandomNum(); // Получение двух сгенерированных чисел
  const num2 = getRandomNum();
  const operArr = ['+', '-', '*']; // Массив операторов
  const operType = operArr[Math.floor(Math.random() * (3 - 0) + 0)]; // Генер. чис. 0-2 и выбор опер
  const question = `${num1} ${operType} ${num2}`; // Объявление и инициализация строки-вопроса
  let correctAnswer = 0; // Объявление переменной правильного ответа и её инициализация через switch
  switch (operType) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      correctAnswer = num1 + num2;
  }
  return [ruleSet, question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
