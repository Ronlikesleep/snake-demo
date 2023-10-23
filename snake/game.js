let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

const main = (currentTime) => {
    if (gameOver) {
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {
        return;
    }
    lastRenderTime = currentTime;
    update();
    draw();
}

window.requestAnimationFrame(main);

const update = () => {
    gameOver = isGameOver();
    updateSnake();
    updateFood();
}

const draw = () => {
    gameBoard.innerHTML = "";
    drawSnake(gameBoard);
    drawFood(gameBoard);
}