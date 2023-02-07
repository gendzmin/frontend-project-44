#!/usr/bin/env node
import { ruleSet, gameCore } from '../src/games/brain-gcd-core.js'; // Импорт правил и уникального ядра игры из bin/games;
import gameTemplate from '../src/index.js'; // Импорт универсального шаблона из src/index.js;

gameTemplate(ruleSet, gameCore); // Вызов функции-шаблона с аргументами - правилами и ядром игры
