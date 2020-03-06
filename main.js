// the "main" code begins here
let friction = 1;
let acceleration = 1000000;
let maxSpeed = 500;
let radius = 10;

let ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./img/960px-Blank_Go_board.png");
ASSET_MANAGER.queueDownload("./img/black.png");
ASSET_MANAGER.queueDownload("./img/white.png");


ASSET_MANAGER.downloadAll(function () {
    let canvas = document.getElementById('gameWorld');
    let ctx = canvas.getContext('2d');
    let gameEngine = new GameEngine(ctx);
    let circle = new Circle(gameEngine, 400, 400, radius * 3, maxSpeed, friction);

    circle.setIt();
    gameEngine.addTurrent(circle);

    for (let i = 0; i < 20; i++) {
        let circle1 = new Circle(gameEngine, radius + Math.random() * (800 - radius * 2), radius + Math.random() * (800 - radius * 2), radius, maxSpeed, friction);

        gameEngine.addEntity(circle1);
    }
    gameEngine.init();
    gameEngine.start();
});
;