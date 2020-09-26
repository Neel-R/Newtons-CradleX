// Variables and Constants:
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var holder, constraint1, constraint2, constraint3, constraint4, constraint5;

function preload(){

}

function setup() {
	createCanvas(displayWidth, displayHeight);


	engine = Engine.create();
	world = engine.world;

	holder = new Roof(520,50,600,100);
	
	bob1 = new Bob(-210,400);
	bob2 = new Bob(-110,400);
	bob3 = new Bob(-10,400);
	bob4 = new Bob(90,400);
	bob5 = new Bob(190,400);

	constraint1 = new Rope(bob1.body,holder.body,-210,50);
	constraint2 = new Rope(bob2.body,holder.body,-110,50);
	constraint3 = new Rope(bob3.body,holder.body,-10,50);
	constraint4 = new Rope(bob4.body,holder.body,90,50);
	constraint5 = new Rope(bob5.body,holder.body,190,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155,0,255);

  drawSprites();
  bob1.display();
  holder.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();

 
}

function mouseDragged () {
	Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});
}

function mouseReleased () {
	mouseDragged = false;
}