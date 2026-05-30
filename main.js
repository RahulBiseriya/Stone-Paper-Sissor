// const stone = document.getElementById("stone")
// stone.addEventListener("click",function(){
//     document.querySelector("img").setAttribute("src","stone.png")
// })

// const paper = document.getElementById("paper")
// paper.addEventListener("click",function(){
//     document.querySelector("img").setAttribute("src","paper.png")
// })

// const sissor = document.getElementById("sissore")
// sissor.addEventListener("click",function(){
//     document.querySelector("img").setAttribute("src","sissor.png")
// })

// function changeSecondImage() {
//     // 1. Grab all <img> tags on the webpage
//     const allImages = document.querySelectorAll('img');
    
//     // 2. Target the second image [1] and change its source file path
//     allImages[1].src = 'new-second-image.jpg';
// }


// 1. Initialize scores
let userScore = 0;
let compScore = 0;

// 2. Define standard choice names
const choices = ['stone', 'paper', 'sissore'];

// 3. Map choices to image files (Double check if your file is named scissor.png or scissors.png)
const choiceImages = {
    'stone': 'stone.png',
    'paper': 'paper.png',
    'sissore': 'sissor.png' // If your image file is named scissor.png, change this to 'scissor.png'
};

// 4. Target your HTML components
const stoneBtn = document.getElementById('stone');
const paperBtn = document.getElementById('paper');
const sissoreBtn = document.getElementById('sissore');

const player1ImgTag = document.querySelector('#player1img img');
const player2ImgTag = document.querySelector('#player2img img');

const userScoreText = document.getElementById('userscore');
const compScoreText = document.getElementById('compscore');

// 5. Click Event Listeners
stoneBtn.addEventListener('click', () => playRound('stone'));
paperBtn.addEventListener('click', () => playRound('paper'));
sissoreBtn.addEventListener('click', () => playRound('sissore'));

// 6. Main Game Engine Function
function playRound(userChoice) {
    // Computer generates a random option (0, 1, or 2)
    const randomIndex = Math.floor(Math.random() * 3);
    const compChoice = choices[randomIndex];

    // BUG FIX AREA: Apply image source securely
    player1ImgTag.src = choiceImages[userChoice];
    player2ImgTag.src = choiceImages[compChoice];

    // Optional: Add alt text dynamically so screen readers know what changed
    player1ImgTag.alt = userChoice;
    player2ImgTag.alt = compChoice;

    // Evaluate Win/Loss logic
    if (userChoice === compChoice) {
        // Tie
    } else if (
        (userChoice === 'stone' && compChoice === 'sissore') ||
        (userChoice === 'paper' && compChoice === 'stone') ||
        (userChoice === 'sissore' && compChoice === 'paper')
    ) {
        // User Wins
        userScore++;
        userScoreText.textContent = userScore;
    } else {
        // Computer Wins
        compScore++;
        compScoreText.textContent = compScore;
    }
}
