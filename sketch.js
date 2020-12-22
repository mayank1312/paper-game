
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,dustbin1,dustbin2,dustbin3,paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
     ground = new Dustbin(width/2,600,width,20)
	 dustbin1 = new Dustbin(600,580,250,20);
	 dustbin2 = new Dustbin(475,530,20,100);
	 dustbin3 = new Dustbin(725,530,20,100);
     paper = new Paper(100,300,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine);
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 paper.display();
 ground.display2();
 keyPressed();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.paper,paper.paper.position,{x:0.2,y:-1.8})
  }


}


