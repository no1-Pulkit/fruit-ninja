var sword,fruitGroup,fruits,monster,monsterGroup,score,gameover,gameoverImage;

var PLAY =1;
var END =0;
var gamestate =1;



var  swordImage,swordAnimation,fruit1Image,fruit2Image,fruit3Image,fruit4Image,monsterImage;

function preload(){
    sword =loadImage("sword.png")
  sword.loadAnimation("knifeSword.mp3")
  monsterGroup.loadAnimation("moving.mp3")
   fruits=loadImage("fruit1.png,fruit2.png,fruit3.png,fruit4.png");
   monsterGroup =loadImage("alien1.png,alien2.png");
  gameover =loadImage("gameover.png");
  gameover =loadAnimation("gameover.mp3")
}

function draw(){
  createCanvas(600,600);
  
  fruits();
  monster();
  fruitGroup =new Group();
  enemyGroup =new Group();
  
  if(gamestate(PLAY)){
    if(fruitGroup.isTouching(sword)){
   fruitGroup.destroyEach() ;
    score =score +2;
  }
   sword.y =World.mouseY;
    sword.x =World.mouseX;
  }
  
  if(gamestate(END)){
  if(monsterGroup.isTouching(sword)){
    sword.addImage(gameover);
    sword.x =200;
    sword.y =200;
      monsterGroup.destroyEach();
      score =score -2;
    }
    monsterGroup.setVelocityXEach =0;
   fruitGroup.setVelocityXEach =0;
  }
  
  
  
   
  score =0;
  textSize(20);
  text("Score  "+score,500,50);
drawSprites();
  
}


function sword(){
  sword =createSprite(300,100,5,5);
  sword.addImage(swordImage);
  sword.addAnimation(swordAnimation)
  sword.scale =0.6;
}

function fruits(){
  if(World.frameCount % 70 === 0);
  fruits =createSprite(400,200,15,15);
  fruits.scale =0.2;
  
  r =Math.round(random(1,5))
  if(r ==1){
    fruit.addImage(fruit1)
  }
  else if(r ==2){
    fruit.addImage(fruit2)
  }
  else if(r ==3){
   fruit.addImage(fruit3) 
  }
  else {
    fruit.addImage(fruit4)
  }
  fruit.y =Math.round(random(50,350));
  
  fruit.velocityX =-5;
  fruit.setLifetimeEach =140;
  
  fruitGroup.add("fruit");
}

function monster(){
  if(World.frameCount %200 ===0);{
     monster =createSprite(400,200,15,15);
    monster.addAnimation(moving,monsterImage);
    monster.y =Math.round(random(100,300));
    monster.velocityX =-7;
    monster.setLifetime =50;
    
    monsterGroup.add(monster);
  } 
}
function gameover(){
  gameover =createSprite(300,200,10,10);
  gameover.addImage(gameover);
  gameover.loadAnimation(gameover)
  gameover.scale = 0.4;
}

