import readlineSync from 'readline-sync';

const getRandomNum = () => Math.round(Math.random() * 10); // Функция-генератор рандомного числа

const gameTemplate = (gameCore) => {
  console.log('Welcome to the Brain Games!'); // Приветствие
  const userName = readlineSync.question('May I have your name? '); // Объявление и инициализация переменной - имени пользователя
  console.log(`Hello, ${userName}`); // Приветствие игрока
  const ruleSet = gameCore()[0]; // Вывод на экран правил (1ый элемент массива из функции ядра игры)
  console.log(ruleSet);
  for (let i = 0; i !== 3; i += 1) { // Цикл с тремя итерациями - игровой процесс
    const gameData = gameCore(); // Вызов функции ядра игры, запись полученного массива в переменную
    const question = gameData[1]; // Запись в переменную вопроса (2й элемент массива )
    const corAnswer = gameData[2]; // Запись в переменную правильного ответа (3й элемент массива)
    const userAnswer = readlineSync.question(`Question: ${question} `); // Получение ответа игрока
    if (userAnswer === corAnswer) { // Проверка правильности ответа через if
      console.log('Correct!'); // Продолжаем цикл, если ответ правильный
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corAnswer}'.`); // Возвращаем функцию, если ответ неправильный
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`); // Поздравление выводится, только если игрок ни разу не попал на возврат из функции
};

export { getRandomNum, gameTemplate }; // Экспорт функции-генератора ранд. числа - её исп. все игры
