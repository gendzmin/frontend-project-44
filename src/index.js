import readlineSync from 'readline-sync';
import { gameCore } from './games/calcGame.js';

const getRandomNum = () => Math.round(Math.random() * 10);
const checkParityNum = (ranNum) => ranNum % 2 === 0 ? 'yes' : 'no';

const gameTemplate = () => {
    console.log(`Welcome to the Brain Games!`);
    const userName = readlineSync.question(`May I have your name? `);
    console.log(`Hello, ${userName}`);
    const ruleSet = gameCore()[0];
    console.log(ruleSet);
    for (let i = 0; i !== 3; i += 1) {
        const gameData = gameCore();
        const question = gameData[1];
        const corAnswer = gameData[2];
        const userAnswer = readlineSync.question(`Question: ${question} `);
        if (userAnswer === corAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${corAnswer}'.`);
            console.log(`Let's try again, ${userName}`);
            return;
        };
    };
    console.log(`Congratulations, ${userName}!`);
};

export {getRandomNum, checkParityNum, gameTemplate};
