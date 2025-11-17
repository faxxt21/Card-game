const userScoreEl = document.getElementById('userScore');
const computerScoreEl = document.getElementById('computerScore');
const userImg = document.getElementById('userCardImg');
const computerImg = document.getElementById('computerCardImg');
const roundEl = document.getElementById('roundCounter');
const btn = document.getElementById('generateBtn');

let userScore = 0;
let computerScore = 0;
let round = 0;
let isGameOver = false; 
let userName = prompt("Введіть ваше ім'я:") || "Гравець";
if(document.getElementById('userName')) {
    document.getElementById('userName').innerText = userName;
}
const cardFiles = [
    '6.png', '7.png', '8.png', '9.png', '10.png',
    'Валет.png', 'Королева.png', 'Король.png', 'Туз.png'
];
const points = [6, 7, 8, 9, 10, 2, 3, 4, 11];
btn.addEventListener('click', function() {
    if (isGameOver || round === 3) {
        resetGame();
        return;
    }
    let userIdx = Math.floor(Math.random() * 9); 
    let computerIdx = Math.floor(Math.random() * 9);

    userImg.src = `img/${cardFiles[userIdx]}`;
    computerImg.src = `img/${cardFiles[computerIdx]}`;

    userScore += points[userIdx];
    computerScore += points[computerIdx];
    
    userScoreEl.innerText = userScore;
    computerScoreEl.innerText = computerScore;

    round++;
    roundEl.innerText = `Спроба ${round} з 3`;
    if (userScore === 21 || computerScore === 21) {
        isGameOver = true;
        setTimeout(() => {
            if (userScore === 21 && computerScore === 21) {
                alert(`Неймовірно! У обох 21! Нічия!`);
            } else if (userScore === 21) {
                alert(`${userName} набрав 21 і переміг!`);
            } else {
                alert(`Комп'ютер набрав 21 і переміг!`);
            }
            btn.innerText = "Грати знову";
        }, 200);
    }
    else if (userScore > 21 || computerScore > 21) {
        isGameOver = true;
        setTimeout(() => {
            if (userScore > 21 && computerScore > 21) {
                alert(`Обидва перебрали! Нічия.`);
            } else if (userScore > 21) {
                alert(`Перебір! У вас ${userScore}. Ви програли.`);
            } else {
                alert(`Комп'ютер перебрав (${computerScore}). Ви виграли!`);
            }
            btn.innerText = "Грати знову";
        }, 200);
    }
    else if (round === 3) {
        setTimeout(() => {
            if (userScore > computerScore) alert(`Кінець гри! ${userName} виграв (${userScore}:${computerScore})`);
            else if (computerScore > userScore) alert(`Кінець гри! Комп'ютер виграв (${computerScore}:${userScore})`);
            else alert(`Кінець гри! Нічия! (${userScore}:${userScore})`);
            
            btn.innerText = "Грати знову";
        }, 500);
    }
});
function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 0;
    isGameOver = false;
    userScoreEl.innerText = 0;
    computerScoreEl.innerText = 0;
    roundEl.innerText = "Спроба 0 з 3";
    btn.innerText = "Generate";
    userImg.src = "img/back.png"; 
    computerImg.src = "img/back.png";
}
