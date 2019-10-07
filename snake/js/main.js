let canvas = document.getElementById('gameArea');
let context = canvas.getContext('2d');

let grid = 16;
let count = 0;

let snake = {
    x: 320,
    y: 320,

    dx: grid,
    dy: 0,

    cells: [],

    maxCells: 4
};

let apple = {
    x: 640,
    y: 640
};

function loop() {
    requestAnimationFrame(loop);
    
    if (++count < 4) {
        return;
    }

    count = 0;
    context.clearRect(0,0, canvas.width, canvas.height);

    snake.x += snake.dx;
    snake.y += snake.dy;

    if (snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    snake.cells.unshift({x: snake.x, y: snake.y});

    if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
    }

    // draw apple
    context.fillStyle = "red";
    context.fillRect(640, 640, 16, 16);

    // draw snake
    
    
}

requestAnimationFrame(loop);
