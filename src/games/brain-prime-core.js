import gameTemplate from '../index.js'; // Импорт шаблона из index.js
import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const getPrimality = (num) => { // Функция, проверяющая простоту числа
  const divisors = [2, 3, 5, 7];
  for (let i = 0; i !== 4; i += 1) {
    if (num % divisors[i] === 0 && !divisors.includes(num)) {
      return false;
    }
  }
  return num !== 1;
};
const gameCore = () => {
  const ruleSet = 'Answer "yes" if given number is prime. Otherwise answer "no". '; // Правила для игры в чётность
  const question = getRandomNum(); // Объявление и инициализация вопроса - рандомного числа
  const correctAnswer = getPrimality(question) ? 'yes' : 'no'; // // Объяв. и иниц. прав. ответа
  return [ruleSet, question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
