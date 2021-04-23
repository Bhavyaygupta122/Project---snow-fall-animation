const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//creating variables
var snow1, snow2,snow3,snow4,snow5;
var engine, world;
var drops = [];
var rand;
var maxDrops=100;
var snowCreatedFrame=0;
var backgroundImg;

function setup(){
    //creating engine
    engine = Engine.create();
    //adding engine to world
    world = engine.world;
    //creating canvas
    createCanvas(600,600);
    //loading background image
    backgroundImg = loadImage("snow2.jpg");
    //creating snow 
    if(frameCount % 10 === 0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new snow(random(0,600), random(0,600)));
        }
    }
    
}

function draw(){
    //upadting engine
    Engine.update(engine);
    background(backgroundImg); 
    
    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
    }
// drawing sprites
    drawSprites();
    
}