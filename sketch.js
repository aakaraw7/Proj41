var engine,world;
drops=[]

function preload(){
   ti=loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png",
   "images/thunderbolt/3.png","images/thunderbolt/4.png");
   bi=loadAnimation("images/Walking Frame/man1.png","images/Walking Frame/man2.png",
   "images/Walking Frame/man3.png","images/Walking Frame/man4.png",
   "images/Walking Frame/man5.png","images/Walking Frame/man6.png",
   "images/Walking Frame/man7.png","images/Walking Frame/man8.png")
}

function setup(){
   createCanvas(1200,500)
   engine=Matter.Engine.create();
   world=engine.world;

   batman=createSprite(600,330,50,50)
   batman.addAnimation("b",bi);
   batman.scale=0.5;
   thunder=createSprite(600,50,50,50)
   thunder.addAnimation("t",ti);
   thunder.scale=0.5;

   // if(World.frameCount%100===0){
   //  for(var i=0;i<1000;i++){
   //     drop=new Drops(random(50,1150),10)
   //     drops.push(drop)
   //  }}

  
   if(frameCount%5000===0){
      for(var i=0;i<50;i++){
         drop=new Drops(random(0,1200),random(0,500))
         drops.push(drop);
      }}
}

function draw(){
   background(0);
   Matter.Engine.update(engine);

   for(var j=0;j<50;j++){
      drops[j].display();
      drops[j].update();
   }
  
 drawSprites();

}   

