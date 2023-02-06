#!/usr/bin/env node
import { ruleSet, gameCore, gameTemplate } from '../src/games/brain-calc-core.js'; // Импортируем уникальное ядро игры и универсальный шаблон из файла с ядром игры в папке bin/games;

gameTemplate(ruleSet, gameCore); // Вызываем функцию-шаблон с аргументом - ядром игры-калькулятора
