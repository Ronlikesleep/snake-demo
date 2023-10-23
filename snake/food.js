
let food =
    { x: 14, y: 19 };

const EXPANSION_RATE = 1;


const updateFood = () => {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

const drawFood = (gameBoard) => {
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);


}

const getRandomFoodPosition = () => {
    let newFoodPosition = randomGridPosition();
    while (onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}