import { getRandomNum, gameTemplate } from '../index.js'; // Импортируем функцию-рандомайзер и шаблон из index.js

const gameCore = () => {
  const ruleSet = 'Find the greatest common divisor of given numbers.'; // Правила для игры-НОД
  const num1 = getRandomNum(100, 1); // Получение двух сгенерированных чисел
  const num2 = getRandomNum(num1, 1); // Второе число < первого - для корректной работы функции НОД
  const question = `${num1} ${num2}`; // Объявление и инициализация строки-вопроса
  const getGrComDiv = (a, b) => { // Функция, находящся НОД
    const c = a % b;
    if (c === 0) {
      return b;
    } return getGrComDiv(b, c);
  };
  const corAnswer = (`${getGrComDiv(num1, num2)}`); // Объявление и иниц. переменной правильного ответа
  return [ruleSet, question, corAnswer]; // Функция возвращает правила, вопрос и правильный ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
