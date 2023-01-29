#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const evenGame = () => {
  for (let i = 0; i !== 3; i += 1) {
    const randomNum = Math.round(Math.random() * 10);
    const parityNum = randomNum % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${randomNum} `);
    if (answer === parityNum) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${parityNum}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
evenGame();
