// // The this keyword generally refers to the object that it is contained within
// const cat = {
//     name: 'Blue Steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow() {
//         console.log(`${this.name} says Meowww!`)
//     },
// }

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg(){
        this.eggCount ++;
        return 'EGG';
    }
}