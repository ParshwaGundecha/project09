
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background("white");

  if(keyIsDown(LEFT_ARROW)){
  background('red');
  }

  if(keyIsDown(RIGHT_ARROW)){
    background('YELLOW');
    }

    if(keyIsDown(DOWN_ARROW)){
      background('blue');
      }

      if(keyIsDown(UP_ARROW)){
        background('green');
        }
drawSprites();
}




