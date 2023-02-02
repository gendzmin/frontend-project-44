install: #Установка модулей согласно package-lock.json
	npm ci

link: #Установка пакета из операционной системы
	sudo npm link

unlink: #Удаление пакетов
	sudo npm unlink -g

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

brain-calc: #Запуск игры brain-calc
	node bin/brain-calc.js

brain-gcd: #Запуск игры brain-gcd
	node bin/brain-gcd.js

code: #Запуск VS Code
	code .

restore: #Откат к последнему коммиту
	git reset --hard HEAD
