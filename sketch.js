
var wall,bullet;

function setup()
 {
  createCanvas(1600, 400);
  speed=random(223,321)

  bullet=createSprite(50, 200, 50,5);  
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  wall=createSprite(1200, 200, 50, 200);  
  wall.shapeColor="green";
  
}


function draw() 
{
  background(0); 
  if(isTouching(bullet,wall))
  {
    wall.shapeColor="red";
  }
  drawSprites();
}
function isTouching(object1,object2){
if(object1.x-object2.x<object1.width/2+object2.width/2 && object2.x-object1.x<object2.width/2+object1.width/2)
  {
    return true;
  }
  else
  {
    return false;
  } 
}



