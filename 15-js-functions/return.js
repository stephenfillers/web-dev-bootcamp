// function add(x, y){
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         console.log('Please use valid numbers');
//         return false;  
//     }
//     return x + y;
// }


// // DEFINE YOUR FUNCTION BELOW:
// function lastElement(array) {
//     last = array.length - 1;
//     return array[last];
// }

// // DEFINE YOUR FUNCTION BELOW:
// function capitalize(str) {
//     let first = str[0].toUpperCase();
//     let remainder = str.slice(1);
//     return first + remainder;
// }

// DEFINE YOUR FUNCTION BELOW:

function sumArray(array) {
    total = 0;
    for(let nums of array){
        total += nums;
    }
    return total;
}

// DEFINE YOUR FUNCTION BELOW:
// const daysOfWeek = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday' 
// }
// function returnDay(n) {
//     while(n > 0 && n < 8) {
//         return daysOfWeek[n];
//     }
//     return null;
// }