var ball;
var position;
var database;
var game, form,player
var gameState,playerCount
function setup(){
    database = firebase.database()
    createCanvas(500,500);
   game=new Game();
   game.getGameState()
   game.start()
}

function draw(){
    background("white");
    if (playerCount==4){
        game.update(1)
        console.log(gameState)
    }  
    if(gameState==1){
        clear()
        game.play()
    }
}