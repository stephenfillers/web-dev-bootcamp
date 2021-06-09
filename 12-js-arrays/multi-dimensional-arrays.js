const gameBoard = [
    ['O', null, 'X'],
    ['null', 'X', 'O'],
    ['X', 'O', null],
]

// How do we find the central item in this particular nested array?

// The first [1] selects the second array (remember indexes start at 0). The second [1] selects the second item in that second array we chose. 
gameBoard[1][1] // simple, huh? 