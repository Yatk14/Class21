var fixed, moving;
var rect1, rect2, rect3, rect4;
var S1, S2
function setup() {
  createCanvas(800,800);
 fixed=createSprite(200,30,50,80);
 fixed.shapeColor="green";
 fixed.velocityY=3
 moving=createSprite(200,800,100,70);
 moving.shapeColor="green";
moving.velocityY=-3;

S1=createSprite(95,100,50,80);
S2=createSprite(600,100,50,80);
S1.shapeColor= "yellow"
S2.shapeColor= "yellow"
S1.velocityX = 4
S2.velocityX = -4

}

function draw() {
  background(0);  
bounceOff(S1,S2);

  

  drawSprites();
}

