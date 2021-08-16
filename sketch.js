const START=0;
const PLAY=1;
var gameState="";
var carImg;
function preload()
{
  carImg=loadImage("car.png");
}

function setup() {
  createCanvas(600, 400);

  car1 = createSprite(100,350);
  car1.addImage(carImg);
  car1.scale=.2;
}
function draw() {
  //setting the background
  background("lightblue");
  
  if(gameState==START){
    fill(0);
    textSize(16);
    text(" Press space to start the game ",95,80);
    
    if(keyDown("space")) {
      car1.velocityX = 7;
      gameState = PLAY;
    }
    
  }
  drawSprites();
}
