// The this keyword generally refers to the object that it is contained within
const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("this is", this);
        console.log(`${this.name} says, Meow, meow, meow.`);
    }
}

const meow2 = cat.meow;