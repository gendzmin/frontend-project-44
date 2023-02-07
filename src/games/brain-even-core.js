import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const getParity = (num) => { // Функция-предикат, определяющая чётность
  if (num % 2 === 0) {
    return true;
  } return false;
};
const ruleSet = 'Answer "yes" if the number is even, otherwise answer "no". '; // Правила для игры в чётность
const gameCore = () => {
  const question = getRandomNum(50); // Объявление и инициализация вопроса - рандомного числа
  const correctAnswer = getParity(question) ? 'yes' : 'no'; // // Объявление и инициализация правильного ответа
  return [question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { ruleSet, gameCore }; // Экспорт правил игры и функций - ядра игры и шаблона
