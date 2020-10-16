const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;
  
   drop = new Drop(200,50);
   drop1 = new Drop1(250,40)
   drop2 = new Drop2(300,30);
   drop3 = new Drop3(350,50);
   drop4 = new Drop4(297,20);
   drop5 = new Drop5(321,70)
   drop6 = new Drop(322,60);
   boy = new Umb(200,400,200,300);
}

function draw(){
    background("white");
    Engine.update(engine);

    drop.display();
    boy.display();
    drop1.display();
    }   

