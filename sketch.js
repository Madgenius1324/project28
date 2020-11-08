
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var t,g,s;
var m1,m2,m3,m4,m5;
var boy,i4;
var c;
function preload()
{
	i4=loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
t=new tree(700,200,100,200);
g=new ground(400,680,800,20);
s= new stone(150,300,50);
m1=new mango(650,180,60);
m2=new mango(700,160,60);
m3=new mango(670,170,60);
m4=new mango(640,150,60);
m5=new mango(640,180,60);
c=new Chain(s.body,{x:210,y:310});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(i4,200,300,200,300)
  t.display();
  g.display();
  s.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  c.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(s.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    c.fly();
}


