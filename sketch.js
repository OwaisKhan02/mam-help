var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, dustbin, paper;
function setup() {
	createCanvas(800, 400);


	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
    dustbin = new DustBin(720,390,100,10);
	paper = new Paper(100, 300, 10);
    ground = Bodies.rectangle(width / 2, 400, width, 10,
	{
		isStatic: true
	});
	World.add(world, ground);
}


function draw() {
  background("black");
  rectMode(CENTER);
  background(0);
  
  
  dustbin.display();
  paper.display();
 
}


function KeyPressed(){
	if(keyDown === UP_ARROW) {
		Matter.body.applyforce(paper.body, paper.body.position, {
			x: 12,
			y: -13
		});
	}
}





