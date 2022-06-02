var bgImg;
var cat;
var mouse;
function preload() {
    //load the images here
    bgImg = loadImage("garden.png");
    catImg  = loadAnimation("cat1.png");
    mouseImg = loadAnimation("mouse1.png");
    catImg2 = loadAnimation("cat2.png","cat3.png","cat4.png");
    mouseImg2 = loadAnimation("mouse2.png","mouse3.png","mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createsprite(600,500);
cat.addAnimation("catsitting",catImg);
cat.scale= 0.2;
mouse = createsprite(200,500);
mouse.addAnimation("mousesitting",mouseImg)
mouse.scale = 0.5;
}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    cat.velocityX=0
    cat.x=30
    cat.scale=0.2
    cat,addAnimation("catrun",catImg2)
    cat.changeAnimation("catrun",catImg2)
    mouse.scale=0.1
    mouse.addAnimation("mouseteasing",mouseImg2)
    mouse.chhangeAnimation("mouseteasing",mouseImg2)
}

keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.fameDelay =25;

}
if(keyCode=== LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("catrun",catImg2)
    cat.changeAnimation("catrun",catImg2)
    mouse.addAnimation("mouseteasing",mouseImg2)
    mouse.changeAnimation("mouseteasing",mouseImg2)
}
}


