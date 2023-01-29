install: #Установка модулей согласно package-lock.json
	npm ci

brain-games: #Запуск bin/brain-games.js
	node bin/brain-games.js

publish: #Публикация пакета в npm
	npm publish --dry-run

lint: #Запуск линтера
	npx eslint .

lint-fix: #Запуск линтера с опцией --fix
	npx eslint . --fix
brain-even: #Запуск игры brain-even
	node bin/brain-even.js