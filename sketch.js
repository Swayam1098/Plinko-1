const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
    world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(100,790,480,10)

}

function draw() {
  background("black"); 
  Engine.update(engine); 
  
}