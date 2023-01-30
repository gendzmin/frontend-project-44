import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log('What is the result of the expression?');
  for (let i = 0; i !== 3; i += 1) {
    const numGen = () => { // Функция генерации числа
      return Math.round(Math.random() * 10);
    };
    const num1 = numGen(); // Сгенерированные числа
    const num2 = numGen();
    const operArr = ['+', '-', '*']; // Массив операторов
    const operGen = () => { // Функция генерации оператора
      return Math.floor(Math.random() * (3 - 0) + 0);
    };
    const operType = operArr[operGen()]; // Выбор оператора
    let corAnswer = 0;
    switch (operType) {
      case '+':
        corAnswer = num1 + num2;
        break;
      case '-':
        corAnswer = num1 - num2;
        break;
      case '*':
        corAnswer = num1 * num2;
        break;
      default:
        corAnswer = num1 + num2;
    }
    const userAnswer = readlineSync.question(`Question: ${num1} ${operType} ${num2} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer === corAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
