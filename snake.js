let inputDir = { x: 0, y: 0 };
let speed = 10;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };
let board = document.getElementById("board");

// 🎵 Load Sounds
let foodSound = new Audio("music/food.mp3");
let gameOverSound = new Audio("music/gameover.mp3");
let moveSound = new Audio("music/move.mp3");
let musicSound = new Audio("music/background.mp3");
musicSound.loop = true; // 🎶 Loop background music

// Load high score from local storage
let hiscore = localStorage.getItem("hiscore");
let hiscoreval = hiscore ? JSON.parse(hiscore) : 0;
document.getElementById("hiscoreBox").innerHTML = "HiScore: " + hiscoreval;

// Game loop
function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) return;
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    return snake[0].x >= 18 || snake[0].x < 0 || snake[0].y >= 18 || snake[0].y < 0;
}

function gameEngine() {
    // If collision occurs
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        musicSound.pause(); // Stop background music
        alert("Game Over! Press any key to restart.");
        snakeArr = [{ x: 13, y: 15 }];
        inputDir = { x: 0, y: 0 };
        score = 0;
        document.getElementById("scoreBox").innerHTML = "Score: " + score;
        musicSound.play(); // Restart music after reset
    }

    // If food is eaten
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        foodSound.play();
        score += 1;
        if (score > hiscoreval) {
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            document.getElementById("hiscoreBox").innerHTML = "HiScore: " + hiscoreval;
        }
        document.getElementById("scoreBox").innerHTML = "Score: " + score;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });

        // Generate new food position
        let a = 2, b = 16;
        food = { x: Math.floor(a + (b - a) * Math.random()), y: Math.floor(a + (b - a) * Math.random()) };
    }

    // Move the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Render the board
    board.innerHTML = "";
    
    // Display the snake
    snakeArr.forEach((e, index) => {
        let snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add(index === 0 ? 'head' : 'snake');
        board.appendChild(snakeElement);
    });

    // Display the food
    let foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);
}

// Start game loop
window.requestAnimationFrame(main);

// Listen for key events
window.addEventListener("keydown", (e) => {
    inputDir = { x: 0, y: 1 }; // Start movement
    moveSound.play(); // Play move sound on key press
    musicSound.play(); // Ensure background music plays when the game starts
    

    switch (e.key) {
        case "ArrowUp": inputDir = { x: 0, y: -1 }; break;
        case "ArrowDown": inputDir = { x: 0, y: 1 }; break;
        case "ArrowLeft": inputDir = { x: -1, y: 0 }; break;
        case "ArrowRight": inputDir = { x: 1, y: 0 }; break;
    }
});

document.getElementById("resetHighScore").addEventListener("click", () => {
    localStorage.removeItem("hiscore"); // Remove stored high score
    hiscoreval = 0; // Reset high score in memory
    localStorage.setItem("hiscore", hiscoreval); // Save new high score as 0
    document.getElementById("hiscoreBox").innerHTML = "HiScore: " + hiscoreval;
    alert("🔥 High Score Reset! 🔥");
});

