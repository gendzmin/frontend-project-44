#!/usr/bin/env node
import { gameTemplate, gameCore } from '../src/games/brain-progression-core.js'; // Импортируем ядро игры и универсальный шаблон из файла с ядром игры в папке bin/games;

gameTemplate(gameCore); // Вызываем функцию-шаблон с аргументом - ядром игры-прогрессии