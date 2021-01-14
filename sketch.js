var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obeseImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400,400)
  monkey=createSprite(25,320,20,20)
  monkey.addAnimation("hi",monkey_running)
  monkey.scale=0.1
  ground=createSprite(400,400,800,100)
  ground.velocityX=-3
  foodGroup=new Group()
  
}


function draw() {
background("lightblue")
  if(keyDown("space")){
    monkey.y=monkey.y-12;
  }
  
  if(ground.width/2){
    ground.x=400}
  monkey.collide(ground)
  monkey.y=monkey.y+10;
  
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime : "+survivalTime,100,50)
  
  
  
  food();
  obstacles();
  drawSprites();
}

function food(){
  if(frameCount % 80===0 ){
  banana=createSprite(400,random(120,200),20,20);
  banana.addImage(bananaImage)
  banana.velocityX=-3
  banana.lifetime=140;
  banana.scale=0.1 
    
    foodGroup.add(banana) 
  }
}

function obstacles(){
  if(frameCount%300===0){
    rock=createSprite(400,330,20,20)
    rock.addImage(obeseImage)
    rock.lifetime=150;
    rock.velocityX=-3;
    rock.scale=0.1
  }
}