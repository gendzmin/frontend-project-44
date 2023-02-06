#!/usr/bin/env node
import { ruleSet, gameCore, gameTemplate } from '../src/games/brain-even-core.js'; // Импортируем уникальное ядро игры и универсальный шаблон из файла с ядром игры в папке bin/games;

gameTemplate(ruleSet, gameCore); // Вызываем функцию-шаблон с аргументом - ядром игры про чётность
