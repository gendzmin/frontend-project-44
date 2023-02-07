import getRandomNum from '../utils.js'; // Импорт функции-рандомизатора из utils.js

const getProgSequence = (length, first, step) => { // Функция генерации последовательности
  const sequence = [];
  let currentNum = first;
  for (let i = 0; i !== length; i += 1) {
    sequence.push(currentNum);
    currentNum += step;
  }
  return sequence;
};
const ruleSet = 'What number is missing in the progression?'; // Правила для игры-прогрессии
const gameCore = () => {
  const progLength = getRandomNum(11, 6); // Генерация длины последовательности - от 6 до 10
  const progFirstNum = getRandomNum(); // Генерация первого числа последовательности
  const progStep = getRandomNum(11, 3); // Генерация шага последовательности - от 3 до 10
  const progSequence = getProgSequence(progLength, progFirstNum, progStep); // Переменная с последов
  const progAbsentNum = getRandomNum(progLength - 1); // Перем. со случ. элем. последов - не > длины
  const correctAnswer = progSequence[progAbsentNum]; // Объявление и иниц. переменной прав. ответа
  progSequence[progAbsentNum] = '..'; // Замена нужного элемента последовательности на плейсхолдер
  const question = progSequence.join(' '); // Объявление и инициализация строки-вопроса
  return [question, correctAnswer]; // Функция возвращает правила, вопрос и прав. ответ
};

export { ruleSet, gameCore }; // Экспорт правил игры и функций - ядра игры и шаблона
