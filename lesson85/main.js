const users = [
    {
        name: 'Anatoliy',
        age: 38,
        isAdmin: true,
        Student: true,
        sayhello(name) {
            console.log(`Hello ${name}`);
        }
    },
    {
        name: 'Alex',
        age: 22,
        isAdmin: false,
        Student: true,
        sayhello(name) {
            console.log(`Hello ${name}`);
        }
    },
    {
        name: 'Jon',
        age: 18,
        isAdmin: false,
        Student: true,
        sayhello(name) {
            console.log(`Hello ${name}`);
        }
    },
    {
        name: 'Bob',
        age: 8,
        isAdmin: false,
        Student: false,
        sayhello(name) {
            console.log(`Hello ${name}`);
        }
    }
]

const userName = []

users.forEach((user) => {
    userName.push(user.name)
})
console.log(userName);


let popped = userName.pop ()
console.log(userName);
console.log(popped);

let shifting = userName.shift()
console.log(userName);
console.log(shifting);

userName.unshift('Anatoliy')
console.log(userName);



// ======================================
let indices = [];
let array = ["a", "b", "a", "c", "a", "d"];
let element = "a";
let idx = array.lastIndexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}
console.log(indices);
// [4, 2, 0]