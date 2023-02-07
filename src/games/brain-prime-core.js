import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const getPrimality = (num) => { // Функция, проверяющая простоту числа
  const divisors = [2, 3, 5, 7];
  for (let i = 0; i !== divisors.length; i += 1) {
    if (num % divisors[i] === 0 && !divisors.includes(num)) {
      return false;
    }
  }
  return num !== 1;
};
const ruleSet = 'Answer "yes" if given number is prime. Otherwise answer "no". '; // Правила для игры в чётность
const gameCore = () => {
  const question = getRandomNum(100); // Объявление и инициализация вопроса - рандомного числа
  const getCorrectAnswer = (boolean) => { // Функция, возвращающая 'yes' или 'no' для прав. ответа
    if (boolean) {
      return 'yes';
    } return 'no';
  };
  const correctAnswer = getCorrectAnswer(getPrimality(question)); // Получение правильного ответа
  return [question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { ruleSet, gameCore }; // Экспорт правил игры и функций - ядра игры и шаблона
