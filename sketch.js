var box;

function setup() {
  createCanvas(500,500);
  box = createSprite(300,300,40,40);

}

function draw()
{
  background("yellow");

  if (keyIsDown(RIGHT_ARROW))
{
  box.position.x = box.position.x +3;
}

  if (keyIsDown(LEFT_ARROW))
{
  box.position.x = box.position.x -3;
}

  if (keyIsDown(UP_ARROW))
  {
    box.position.y = box.position.y -3;
  }

  if(keyIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y +3;
  }

  drawSprites();
}