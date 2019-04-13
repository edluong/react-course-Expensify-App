const person = {
    name: 'Ed',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 67
    }
};

// setting default for name
const {name: firstName = 'Anonymous', age} = person;
// const name = person.name;
// const age = person.age;

console.log(`${firstName} is ${age}.`);

// temp property from person.location and rename it to temperature
const {city, temp: temperature} = person.location

if(city && temperature){
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {publisher: publisherName = 'Self-Published'} = book;

console.log(publisherName);
