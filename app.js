let [userScore, compScore] = [0, 0];
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');

const getCompChoice = () => {
    const roll = ['r', 'p', 's'];
    const random = Math.floor(Math.random() * 3);
    return roll[random];
}

const convertToWord = (letter) => {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissor';
}

const win = (user, comp) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = `${userScore}`;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord} . You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('green-glow');
    }, 300)
}

const lost = (user, comp) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    compScore++;
    compScore_span.innerHTML = `${compScore}`;
    result_p.innerHTML = `${convertToWord(comp)}${smallUserWord} beats ${convertToWord(user)}${smallCompWord} . You lost!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('red-glow');
    }, 300)
}

const draw = (user, comp) => {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    userScore_span.innerHTML = `${userScore}`;
    compScore_span.innerHTML = `${compScore}`;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} equals ${convertToWord(comp)}${smallCompWord} . It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {
        document.getElementById(user).classList.remove('gray-glow');
    }, 300)
}

const game = (userChoice) => {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, compChoice);
        break;

        case "rp":
        case "ps":
        case "sr":
        lost(userChoice, compChoice);
        break;

        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, compChoice);
        break;
    }
}

const main = () => {
    rock_div.addEventListener('click', () => {
        game('r');
    });
    
    paper_div.addEventListener('click', () => {
        game('p');
    });
    
    scissor_div.addEventListener('click', () => {
        game('s');
    });
}

main();