function setup() {
  createCanvas(800,400);
 var coin=createSprite(400, 200, 50, 50);
 var pin=createSprite();
 var pinArray=[pin,];
}

function draw() {
  background(255,255,255);  
  
  
  
  if(coin.isTouching(pin)){
   coin.bounce(pinArray);
  }
  
  
  
  drawSprites();
}