const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint= Matter.Constraint;

var engine,world, box1, ball, rope;
var ground;
function setup() { 
  createCanvas(3000,600); 
  engine=Engine.create();
  world=engine.world;
  
  //For ground
  ground = new Ground(170,600,3000,20);

  //boxes
  box1=new Stack(10,500,300,70);
  
  //ball
  ball = new Ball(200,200,80);
  
  //rope
  rope = new Rope(ball.body,{x:500,y:50});


  // console.log(myObject);
  // console.log(myObject.position.y);

 
}
  function draw() { 
    background (0);
    Engine.update(engine);
    box1.display();
    ball.display();
    rope.display();
    ground.display();
    
    
}
  

function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}