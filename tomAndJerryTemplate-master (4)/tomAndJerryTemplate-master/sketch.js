var gato, gatoImg, gatoImg2, gatoImg3;
var rato, ratoImg1, ratoImg2,ratoImg3;
var garden, gardenImg;
function preload() {
    //load the images here
    gardenImg.loadImage("garden.png")
    gatoImg1.loadImage("cat1.png");
    gatoImg2.loadAnimation("cat2.png","cat3.png");
    gatoImg3.loadImage("cat4.png");
    ratoImg1.loadImage("mouse1.png");
    ratoImg2.loadAnimation("mouse2.png","mouse3.png");
    ratoImg3.loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprites(1000,800)
    garden.addImage(gardenImg);
    gato = createSprites(10,10);
    gato.addImage(gatoImg1);
    rato.addImage(ratoImg1);

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (gato.x - rato.x < (gato.width - rato.width)/2){
        gato.addImage("gatoFeliz",gatoImg3);
        gato.changeImage("gatoFeliz");
        gato.velocityX = 0;
    }

    gato.display();
    rato.display();
    garden.display();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyCode == LEFT_ARROW){
        gato.velocityX = -05
        gato.addAnimation("gatoAndando",gatoImg2);
        gato.changeAnimation("gatoAndando");
        rato.addAnimation("ratoProvocando",ratoImg2);
        rato.changeAnimation("ratoProvocando");

    } 
}