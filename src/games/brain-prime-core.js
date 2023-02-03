import { getRandomNum, gameTemplate } from '../index.js'; // Импортируем функцию-рандомайзер и шаблон из index.js

const gameCore = () => {
  const ruleSet = 'Answer "yes" if given number is prime. Otherwise answer "no". '; // Правила для игры в чётность
  const question = getRandomNum(); // Объявление и инициализация вопроса - рандомного числа
  const getPrimality = (num) => { // Функция, проверяющая простоту числа
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return num > 1 ? 'yes' : 'no';
  };
  const corAnswer = getPrimality(question); // // Объяв. и иниц. прав. ответа - строки `yes` / `no`
  return [ruleSet, question, corAnswer]; // Функция возвращает правила, вопрос и правильный ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
