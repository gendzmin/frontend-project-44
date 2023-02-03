import { getRandomNum, gameTemplate } from '../index.js'; // Импортируем функцию-рандомайзер и шаблон из index.js

const gameCore = () => {
  const ruleSet = 'What number is missing in the progression?'; // Правила для игры-прогрессии
  const progLength = getRandomNum(11, 5); // Генерация длины последовательности - от 5 до 10
  const progFirstNum = getRandomNum(); // Генерация первого числа последовательности
  const progStep = getRandomNum(11, 3); // Генерация шага последовательности - от 3 до 10
  const getProgSequence = (length, first, step) => { // Функция генерации последовательности
    const sequence = [];
    let currentNum = first;
    for (let i = 0; i !== length; i += 1) {
      sequence.push(currentNum);
      currentNum += step;
    }
    return sequence;
  };
  const progSequence = getProgSequence(progLength, progFirstNum, progStep); // Переменная с последов
  const progAbsentNum = getRandomNum(progLength - 1); // Перем. со случ. элем. последов - не > длины
  const corAnswer = `${progSequence[progAbsentNum]}`; // Объявление и иниц. переменной правильного ответа
  progSequence[progAbsentNum] = '..'; // Замена нужного элемента последовательности на плейсхолдер
  const question = `${progSequence}`; // Объявление и инициализация строки-вопроса
  return [ruleSet, question, corAnswer]; // Функция возвращает правила, вопрос и правильный ответ
};

export { gameCore, gameTemplate }; // Экспортируем функции - ядро игры и шаблон
