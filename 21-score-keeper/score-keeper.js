const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const players = [p1, p2]
const resetButton = document.querySelector('#resetButton');
const scoreSelector = document.querySelector('#scoreSelector');
let winningScore = 3;
let isGameOver = false;

const updateScores = function (player, opponent) {
    if (!isGameOver) {
        player.score++
        if (player.score >= winningScore && player.score - opponent.score >= 2) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

scoreSelector.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

const reset = function () {
    isGameOver = false;
    for (player of players) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset);