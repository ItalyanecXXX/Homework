
const Age = 38
result = null

if (Age >= 18) {
    console.log('Совершеннолетний');
} else {
    console.log('Подросток');
}

const alex = 'admin'
alex === 'admin' ? console.log('yes') : console.log('no');


const bob = 5
let weight = '10'

// if (wight === 10 && bob !== 5) {
//     console.log('no');
// } else if (wight != 10 || bob == 5) {
//     console.log('yes');
// } else {
//     weight -= 5
//     console.log(wight);
// }






let b = 2 + 2;

switch (b) {
    case 3:
        alert('Маловато');
        break;
    case 4:
        alert('В точку!');
        break;
    case 5:
        alert('Перебор');
        break;
    default:
        alert("Нет таких значений");
}

let a = 3;

switch (a) {
    case 4:
        alert('Правильно!');
        break;

    case 3: // (*) группируем оба case
    case 5:
        alert('Неправильно!');
        alert("Может вам посетить урок математики?");
        break;

    default:
        alert('Результат выглядит странновато. Честно.');
}

let h = 0
let i = 0
while (i < 5) {
    i++
    console.log(i);
};

do {
    h++
    console.log(h);
} while (h < 3)

for (let b = 10; b > 1; b = b - 2) {
    console.log(`Lesson ${b}`);
}


const numbers = [1, '2', [1, 2, 3], 5]
numbers[0] = 6
for (let k = 0; k < numbers.length; k++) {
    console.log(numbers[k] + 1);
}

//   ++q  q++
const xer = ['a', 'b', 'c', 'd']
for (let q = 3; q >= 1; q--) {
    console.log(xer[q]);
}

//========================================

function summNum(wan, fry) {
    wan += 2;
    fry += 3;
    return wan + fry
}
const res = summNum(2, 3)
console.log(res);
console.log(summNum(4, 5));

const users = ['Jonn', 'Anna', 'Max']

function checkForName(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `yesss ${item}`
        }
    }
    return `nooooon`
}
console.log(checkForName(users, 'Anna'));
console.log(checkForName(users, 'Mam'));



const arrayNum = [2, 3, 5, 55, 77, 99]
const checkNum = (array) => {
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
                console.log(`yes ${array[i]}`);
            }
        }
    }
checkNum(arrayNum);


const colcolet = (num1, num2, znak) => {
    if ( znak == '+') {
        return( num1 + num2 )
    } else if ( znak == '-') {
        return( num1 - num2 )
    } else if ( znak == '*') {
        return( num1 * num2 )
    } else if ( znak == '/') {
        return( num1 / num2 )
    } else return `error`
}
console.log(colcolet(5,5,'+'));
console.log(colcolet(5,5,'-'));
console.log(colcolet(5,5,'*'));
console.log(colcolet(5,5,'/'));