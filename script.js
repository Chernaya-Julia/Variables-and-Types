console.group ("Первая часть");

console.log('Способ 1');
console.warn('Способ 2 - предупреждение');
console.error('Способ 3 - ошибка');
console.info('Способ 4 - информация');
console.assert(false,'Сообщение 5 - assert');

console.groupEnd();

console.group ("Вторая часть");

let arrOfNumbers = new Array();

var cnt = prompt('Сколько чисел хотите ввести?');
var avgOfArray = 0;

for (i = 0; i<cnt; i++) {
    arrOfNumbers.push(Number(prompt('Введите число '+(i+1))));
    avgOfArray = avgOfArray+arrOfNumbers[i];
}

console.log('Среднее арифметическое = '+avgOfArray/arrOfNumbers.length);

console.groupEnd();

console.group ("Третья часть");

var birthYear = Number(prompt('Введите ваш год рождения:'));

var yearNow = new Date();

console.log("Ваш возраст - "+ (Number(yearNow.getFullYear()) - birthYear) + "лет");

console.groupEnd();

