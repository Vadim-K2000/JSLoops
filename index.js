'use strict';

// for

// 1. Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

const num = prompt('Enter num: ');
let result = '';
for (let i = 0; i <= 100; i++) {
  if (100 % i === 0) result += i + ' ';
}
alert(result);
