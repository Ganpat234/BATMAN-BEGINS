const World = Matter.World
const Engine = Matter.Engine
const Bodies = Matter.Bodies

var world,engine;
var thunder,t1,t2,t3,t4,r;
var man,m1;
var maxDrops = 100;
var drops = []

function preload(){
    t1 = loadImage("images/thunderbolt/1.png")
    t2 = loadImage("images/thunderbolt/2.png")
    t3 = loadImage("images/thunderbolt/3.png")
    t4 = loadImage("images/thunderbolt/4.png")

    m1 = loadAnimation("images/man/walking_1.png","images/man/walking_2.png","images/man/walking_3.png","images/man/walking_4.png","images/man/walking_5.png","images/man/walking_6.png","images/man/walking_7.png","images/man/walking_8.png")
    
    
}

function setup(){
   createCanvas(800,900)
   engine = Engine.create()
   world = engine.world

   man = createSprite(400,700,50,50)
   man.addAnimation("man",m1)
   
   if(frameCount%100===0){
       for(var i=0; i<maxDrops; i++){
           drops.push(new Drop(random(0,800), random(0,800)))
       }

   }
}

function draw(){
    Engine.update(engine);
    background("black")
    if(frameCount%50===0){
        thunder = createSprite(random(20,780),random(10,30),50,50)
        var r=Math.round(random(1,4))
        switch(r){
            case 1:thunder.addImage(t1);
            break
    
            case 2:thunder.addImage(t2);
            break
    
            case 3:thunder.addImage(t3);
            break
    
            case 4:thunder.addImage(t4);
            break
    
        }
        thunder.lifetime = 10;
    }
    
for(var i=0; i<maxDrops; i++){
    drops[i].display()
    drops[i].update()
}
    
    drawSprites()
}   

