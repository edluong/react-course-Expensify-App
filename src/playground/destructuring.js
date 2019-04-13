//object destructuring

// const person = {
//     name: 'Ed',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 67
//     }
// };

// // setting default for name
// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// // temp property from person.location and rename it to temperature
// const {city, temp: temperature} = person.location

// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {publisher: publisherName = 'Self-Published'} = book;

// console.log(publisherName);

// Array destructuring

const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];

// matching by position
const [street, city, state = 'New York', zip] = address;

// leave a space for the variables you dont want to destructure
// const [, , state, ] = address;

console.log(`You are in ${city} ${street}.`);

const item = ['Coffee (hot)', '$2.00','$2.50','$2.75'];

const [coffeeType,,mediumPrice] = item;

console.log(`A medium ${coffeeType} costs ${mediumPrice}`);
