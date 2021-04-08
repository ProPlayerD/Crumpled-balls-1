
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var paper1;
var dustbin1;

function setup() {
	createCanvas(1000, 550);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(500,450);
	paper1 = new Paper(150,345);

	dustbinbottom = new Dustbin(725,425,170,20)
	dustbinleft = new Dustbin(650,385,20,100)
	dustbinright = new Dustbin(800,385,20,100)
  
}


function draw() {
  background(0);

  Engine.run(engine);
  
  ground1.display();
  paper1.display();
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();

}

function keyPressed(){

	if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-70})

	}
}



