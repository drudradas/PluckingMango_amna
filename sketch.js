const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy;
var stone;
var mango1;

function preload() {
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(400, 400, 800, 20);

	tree = new Tree(607, 210);

	boy = new Boy(120, 345);

	stone = new Stone(88, 309);

	mango1 = new Mango(600, 60, 20);
	mango2 = new Mango(500, 120, 30);
	mango3 = new Mango(700, 180, 25);
	mango4 = new Mango(550, 220, 20);
	mango5 = new Mango(650, 100, 35);
	mango6 = new Mango(580, 150, 30);
	mango7 = new Mango(750, 120, 20);

	slingshot = new SlingShot(stone.body, {x:88, y:309});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();

  tree.display();

  boy.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  slingshot.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone, lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
   if(distance<=lmango.r+lstone.r) // it was distance<-lmango.r+lstone.r . Changed that to <=
   {
      Matter.Body.setStatic(lmango.body, false);
    }
}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420});
    slingshot.attach();
  }
}