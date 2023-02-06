import gameTemplate from '../index.js'; // Импорт шаблона из index.js
import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const gameCore = () => {
  const ruleSet = 'Answer "yes" if the number is even, otherwise answer "no". '; // Правила для игры в чётность
  const question = getRandomNum(); // Объявление и инициализация вопроса - рандомного числа
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'; // // Объявление и инициализация правильного ответа - строки `yes` или `no`
  return [ruleSet, question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
