
var monkey , monkey_running, monkey_stopped
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

var ground, invisibleGround;
var gameState = 1;
var score = 0;

function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  monkey_stopped = loadImage("sprite_0.png");
 
}



function setup() {
  createCanvas(400, 400);

  ground = createSprite(200, 390, 400, 20);
  invisibleGround = createSprite(200, 395, 400, 20);
  
  monkey = createSprite(50, 360, 10, 10);
  monkey.addAnimation("run", monkey_running);
  monkey.scale = 0.12;
  
  obstaclesGroup = new Group();
  foodGroup = new Group();
  
  
  
}


function draw() {
 background("white");
  monkey.collide(invisibleGround);
  console.log(monkey.y)
  textSize(20);
  text(score, 350, 50, 50, 20);
  
  
    
    
  
  if (monkey.isTouching(obstaclesGroup)) {
  
    ground.velocityX = 0;
    obstaclesGroup.setVelocityXEach(0)
    text("Game-Over", 160, 200, 50, 20);
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
    gameState = 0; 
}else {
  if(keyDown("space")&& monkey.y >= 342) {

    monkey.velocityY = -12;
}
  monkey.velocityY = monkey.velocityY + 0.8
}
  
    
 
  if (ground.x < 0){
    ground.x = ground.width/2;
 }
  
  if(monkey.isTouching(foodGroup)) {
    foodGroup.visible = false;
    score = score + 1;
    
    
    
    
  }
  
 obstacleGroup();
 bananaGroup();
 drawSprites();




}


function obstacleGroup() {
 
  
 if(frameCount%240 ===0) {
  obstacle = createSprite(450, 360, 10 ,10);
  obstacle.addImage("obs", obstaceImage);
  obstacle.scale = 0.12;
  obstacle.velocityX = -10;
  obstacle.lifetime = 600;
  obstaclesGroup.add(obstacle);
 
}
}
function bananaGroup() {
  if(frameCount%480 ===0 
     && 
  gameState === 1) {
  banana = createSprite(450, 300, 10 ,10);
  banana.addImage("food", bananaImage);
  banana.scale = 0.12;
  banana.velocityX = -10;
  banana.lifetime = 600;
  foodGroup.add(banana);
 
}
  
  
  
  
  
  
}
  
  
  



