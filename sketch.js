const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var zombie;
var zombieImg;

var superzombie;
var superzombieImg;

var score = 0;


var survivor;
var survivorImg;
var bg;
var x = 0.1;
var y = 0.1;


function preload(){
  bg = loadImage("level1.jpg");
  survivorImg = loadImage("survivor.png");
  zombieImg = loadImage("zombie.png");
  superzombieImg = loadImage("superzombie.jpg")
}
function setup() {
    canvas = createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;

  survivor = createSprite(600,400,20,20);
  survivor.addImage(survivorImg);
  survivor.scale = 0.15;

  zombie = new Zombie(200,200,60,60);
 

}

function draw() {
background(bg);
Engine.update(engine);

if(keyDown (LEFT_ARROW)){
 survivor.velocityX = survivor.velocityX - x
}

if(keyDown (RIGHT_ARROW)){
    survivor.velocityX = survivor.velocityX + x
}

if(keyDown (UP_ARROW)){
    survivor.velocityY = survivor.velocityY - y
}

if(keyDown (DOWN_ARROW)){
    survivor.velocityY = survivor.velocityY + y
}
//bullet stuff
/*if(bullet.isTouching(zombie)){
  score = score+5;
  zombie.destroy();
}*/
  
zombie.display();
    spawnZombies();
    spawnSuperZombies();
    drawSprites();
    spawnBullet();
}

function spawnZombies() {
   
    if (frameCount % 90 === 0) {
      var zombie = createSprite(0,120,60,60);
      zombie.addImage(zombieImg);
      zombie.scale = 0.15;
      zombie.y = Math.round(random(250,350));
      zombie.velocityX = 3;
    }

    if (frameCount % 130 === 0) {
      var zombie = createSprite(1500,120,60,60);
      zombie.addImage(zombieImg);
      zombie.scale = 0.15;
      zombie.y = Math.round(random(250,350));
      zombie.velocityX = -3;
    }

    if (frameCount % 100 === 0) {
      var zombie = createSprite(1500,0,60,60);
      zombie.addImage(zombieImg);
      zombie.scale = 0.15;
      zombie.x = Math.round(random(650,750));
      zombie.velocityY = 3;
    }

    if (frameCount % 98 === 0) {
      var zombie = createSprite(1500,700,60,60);
      zombie.addImage(zombieImg);
      zombie.scale = 0.15;
      zombie.x = Math.round(random(650,750));
      zombie.velocityY = -3;
    }


  }

  function spawnSuperZombies() {
   
    if (frameCount % 1000 === 0) {
      var superzombie = createSprite(0,120,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.y = Math.round(random(200,300));
      superzombie.velocityX = 2;
    }

    if (frameCount % 1300 === 0) {
      var superzombie = createSprite(1500,120,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.y = Math.round(random(250,350));
      superzombie.velocityX = -2;
    }

    if (frameCount % 800 === 0) {
      var superzombie = createSprite(1500,0,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.x = Math.round(random(650,750));
      superzombie.velocityY = 2;
    }

    if (frameCount % 900 === 0) {
      var superzombie = createSprite(1500,700,60,60);
      superzombie.addImage(superzombieImg);
      superzombie.scale = 0.09;
      superzombie.x = Math.round(random(650,750));
      superzombie.velocityY = -2;
    }
    }

    function spawnBullet(){

if(keyWentDown("SPACE")){
  var bullet = createSprite(survivor.x, survivor.y, 10,2);
  bullet.velocityX = 2;
  bullet.shapeColor = "yellow"
}

    }
  
