// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`     j is: ${j}`)
//     }
// }

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`Row: ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

// Let's make this simpler with a for of loop! Wow!

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}