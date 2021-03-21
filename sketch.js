const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops = [];
var maxDrops = 100; 
var umbrella 
var man
var thunder
var random1
var thunderImg1
var thunderImg2
var thunderImg3
var thunderImg4


function preload(){
    
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    background(0);
    createCanvas(500,1000); 
    man = createSprite(250,525,20,20);
    var manImg = loadImage("walking_1.png")   
    man.addImage(manImg);
    man.scale = 0.5;
    thunder = createSprite(200,120);
    thunderImg1 = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
    thunderImg3 = loadImage("3.png");
    thunderImg4 = loadImage("4.png");
    thunder.scale = 0.5



}

function draw(){
    Engine.update(engine);
    background(0);
    random1 = Math.round(random(1,4))
    if (frameCount%35===0) {
      switch(random1) {
        case 1: thunder.addImage(thunderImg1);
        break;
        case 2: thunder.addImage(thunderImg2);
        break;
        case 3: thunder.addImage(thunderImg3);
        break;
        case 4: thunder.addImage(thunderImg4);
        
      }
    }
    if (frameCount%0.5===0) {
        drops.push(drop1 = new Drop(random(1,500), 5, 5, 5));
      }
      umbrella = new Umbrella(250,500,40);

    for (var j = 0; j < drops.length; j++) {
    drops[j].display();
  }
  //umbrella.display()


  drawSprites();
}  
