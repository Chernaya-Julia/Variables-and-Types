
var arrOfNumbers = new Array();
var avgOfArray = 0;

arrOfNumbers = prompt('Введите числа через запятую').split(',');

for (i = 0; i <= arrOfNumbers.length-1; i++) {
    avgOfArray = avgOfArray + Number(arrOfNumbers[i]);
}

console.log('Среднее арифметическое = '+avgOfArray/arrOfNumbers.length);