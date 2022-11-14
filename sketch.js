
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var leftBin;
var rightBin;
//var top_wall;

var pushButton;
//var rightButton;

var ball;

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;

  var ballOptions = {
  isStatic:false,
  restitution:0.3,
  friction:0,
  density: 1
  }
 
  ball = Bodies.circle(200,200,15,ballOptions);
  World.add(world, ball);
  
  ground =new Ground(750,650,1500,10);
  rightBin = new Ground(1150,600,20,120);
  
  leftBin = new Ground(900,600,20,120);
 // top_wall = new Ground(200,10,400,20);


   
  pushButton = createImg("push.png");
  pushButton.position(50,50)
  pushButton.size(70,70)
  pushButton.mouseClicked(Yforce)

 // rightButton = createImg("right.png");
 // rightButton.position(150,50)
 // rightButton.size(70,70)
 // rightButton.mouseClicked(Xforce)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {

  background(51);
  ground.show();
 
  leftBin.show();
  rightBin.show();
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,15);
     if (ball.position.x>1000 && ball.position.y>600){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:1});
	 }
 

	}



	
		function Yforce(){
			 Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:-20});
			} 
		   
			
		  
		

