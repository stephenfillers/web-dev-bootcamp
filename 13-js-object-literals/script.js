// JavaScript objects are made up of a key: value pair. Keys are always converted to strings, so be mindful of which of the below methods you use
// when accessing data. 
const person = {
    firstName: 'Mick',
    lastName: 'Jagger',
}

// How to access data from an object? Both of these equate to the same value
person["firstName"];
person.firstName;

const kitchenSink = {
    favNum: 94324,
    isFunny: true,
    colors: ['red', 'orange']
}

// How to access data from an object?
kitchenSink["favNum"]; 
kitchenSink.favNum;

const years = {
    1991: 'good',
    2020: 'bad'
}