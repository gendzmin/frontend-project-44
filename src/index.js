import readlineSync from 'readline-sync';

export default (ruleSet, gameCore) => {
  console.log('Welcome to the Brain Games!'); // Приветствие
  const userName = readlineSync.question('May I have your name? '); // Объявление и инициализация переменной - имени пользователя
  console.log(`Hello, ${userName}!`); // Приветствие игрока
  console.log(ruleSet);
  const numOfRounds = 3;
  for (let i = 0; i !== numOfRounds; i += 1) { // Цикл с тремя итерациями - игровой процесс
    const [question, correctAnswer] = gameCore();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `); // Получение ответа игрока
    if (userAnswer === correctAnswer.toString()) { // Проверка правильности ответа через if
      console.log('Correct!'); // Продолжаем цикл, если ответ правильный
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`); // Возвращаем функцию, если ответ неправильный
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`); // Поздравление выводится, только если игрок ни разу не попал на возврат из функции
};
