
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango
var stone
var ground
var tree
var boy
var slingshot

function preload()
{
	tree = loadImage("Plucking mangoes/tree.png")
	boy = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango = new Mango(1120,200,60);
	mango2 = new Mango(1000,350,40);
	mango3 = new Mango(950,230,60);
	mango4 = new Mango(1200,270,40);
	mango5 = new Mango(1070	,300,60);
	stone = new Stone(200,400,50);
	ground = new Ground(800,650,1600,10);
	slingshot = new SlingShot(stone.body, {x:210, y:480})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy, 200, 420, 200, 300);
  image(tree, 900, 160, 400,500);
  drawSprites();

  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  ground.display();
  slingshot.display();

  detectCollision(stone,mango);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(stone.body);
    }
}

function detectCollision(lstone,lmango){
    MBP = lmango.body.position
    SBP = lstone.body.position

    var distance = dist(SBP.x, SBP.y, MBP.x, MBP.y)
    if(distance<=lmango.radius + lstone.radius){
        Matter.Body.setStatic(lmango.body,false);

    }
}