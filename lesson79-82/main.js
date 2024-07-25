const age = 38

if (age >= 18) {
    console.log('Вы совершеннолетний');
} else {
    console.log('Вам еще нет 18');
}


// ==============================
console.log('Циклы');
for (let i = 2; i <= 12; i += 2) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let x = 2;
while (x <= 12) {
    console.log(x);
    x += 2;
}

let y = 10;
while (y >= 1) {
    console.log(y);
    y--;
}

// ===========================

console.log('Массивы');
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}


const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = rainbow.length - 1; i >= 0; i--) {
        console.log(rainbow[i]);
}

// =================================

console.log('Функции');


const nameMy = 'Alex'
function greeting(name) {
    console.log(name);
}
greeting(nameMy);



const arrayNumbers = [2, 3, 5, 55, 77, 99]
const checkNum = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
                console.log(`number ${array[i]}`);
            }
        }
    }
checkNum(arrayNumbers);


console.log('Калькулятор');
let result = 0
const calculator = (num1, num2, znak) => {
    if ( znak == '+') {
        result = num1 + num2;
        return( console.log(result))
    } else if ( znak == '-') {
        result = num1 - num2;
        return( console.log(result))
    } else if ( znak == '*') {
        result = num1 * num2;
        return( console.log(result))
    } else if ( znak == '/') {
        result = num1 / num2;
        return( console.log(result))
    } else return `error`
}

calculator(5,5,'+');
calculator(5,5,'-');
calculator(5,5,'*');
calculator(5,5,'/');