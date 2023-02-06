import gameTemplate from '../index.js'; // Импорт шаблона из index.js
import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const getGrComDiv = (a, b) => { // Функция, находящся НОД
  const c = a % b;
  if (c === 0) {
    return b;
  } return getGrComDiv(b, c);
};
const ruleSet = 'Find the greatest common divisor of given numbers.'; // Правила для игры-НОД
const gameCore = () => {
  const num1 = getRandomNum(100, 1); // Получение двух сгенерированных чисел
  const num2 = getRandomNum(num1, 1); // Второе число < первого - для корректной работы функции НОД
  const question = `${num1} ${num2}`; // Объявление и инициализация строки-вопроса
  const correctAnswer = getGrComDiv(num1, num2); // Объявление и иниц. переменной правильного ответа
  return [question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { ruleSet, gameCore, gameTemplate }; // Экспорт правил игры и функций - ядра игры и шаблона
