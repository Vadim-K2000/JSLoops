'use strict';

// while
// 1. Вывести # столько раз, сколько указал пользователь.

alert('//1');
let count = Number(prompt('Enter the number'));
let lattice = '';
while (count-- > 0) {
  lattice += '#';
}
alert(lattice);

// 2. Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

alert('//2');
let count2 = Number(prompt('Enter the number'));
let str = '';
while (count2 >= 0) {
  str += count2--;
}
alert(str);

// 3.  Запросить число и степень. Возвести число в указанную степень и вывести результат.

alert('//3');
const num = Number(prompt('Enter num: '));
let pow = Number(prompt('Enter power: '));
let result = num;
while (pow-- > 1) {
  result *= num;
}
alert(result);

// 4. Запросить 2 числа и найти все общие делители.

const num1 = Number(prompt('Enter num1'));
const num2 = Number(prompt('Enter num2'));
const divisor = (x) => {
  let y = x;
  let result = [];
  while (y > 0) {
    if (x % y === 0) result.push(y);
    y--;
  }
  return result;
};

const generalDivisor = (num1, num2) => {
  const first = divisor(num1);
  const second = divisor(num2);

  let result = 'General divisor: ';
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        result += String(first[i]) + ' ';
      }
    }
  }
  return result;
};

alert(generalDivisor(num1, num2));
