
const user = {
    name: 'Anatoliy',
    age: 38,
    isAdmin: true,
    Student: true,
    sayhello (name) {
        console.log(`Hello ${name}`);
    }
}
user.sayhello('Alex')


const users = [
    {
        name: 'Anatoliy',
        age: 38,
        isAdmin: true,
        Student: true,
        sayhello (name) {
            console.log(`Hello ${name}`);
        }
    },
    {
        name: 'Alex',
        age: 22,
        isAdmin: false,
        Student: true,
        sayhello (name) {
            console.log(`Hello ${name}`);
        }
    },
    {
        name: 'Jon',
        age: 18,
        isAdmin: false,
        Student: true,
        sayhello (name) {
            console.log(`Hello ${name}`);
        }
    },
    {
        name: 'Bob',
        age: 8,
        isAdmin: false,
        Student: false,
        sayhello (name) {
            console.log(`Hello ${name}`);
        }
    }
]
let simpleUser = 0;
for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        simpleUser += 1
    }
}
console.log(`В массиве ${simpleUser} простых пользователя`);