var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
 fixedRect = createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = "green";

 movingRect = createSprite(300, 200, 80, 30);
 movingRect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("Horizontal Dist : "+ (movingRect.x-fixedRect.x));
  console.log("Width : "+ (fixedRect.width/2+movingRect.width/2))
  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 && fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2&& fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2&& movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2)
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}