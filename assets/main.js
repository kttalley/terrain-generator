new p5();

let w = 140;
let magicAngle;
let maxD;
let howMany = 128*64;
let orthoX;
let orthoY;
let orthoZ = w*w+4096;

//terrain tiles
let water;
let sand;
let grass;
let stone;
let dirt;
let snow;
let lava;


function preload() {
    water = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/water.jpg");  
    sand  = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/sand.png");
    grass = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/grass.png");
    stone = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/stone.png");
    dirt = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/dirt.jpg");
    snow = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/snow.jpg");
    lava = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/lava.jpg");
}

function setup() {
    createCanvas(750, 500, WEBGL);
    magicAngle = atan(1 /sqrt(2));
    orthoX = width;
    orthoY = height;
}

function draw() {
    background(200,200,0);
    //grass
    translate(-100,0, -100);
    // camera(mouseX, mouseY);
    rotateX(frameCount*0.01);
    texture(grass);
    box(50, 50, 50);
    resetMatrix();

     //snow
     translate(100,0,-100);
     rotateY(frameCount*0.008);
     texture(snow);
     box(50, 50, 50);
     resetMatrix();

     //stone
     translate(10,0,-200);
     rotateY(frameCount*0.008);
     texture(stone);
     box(50, 50, 50);
     resetMatrix();
      
     //water
      translate(-120,0, -200);
      // camera(mouseX, mouseY);
      rotateX(frameCount*0.01);
      texture(water);
      box(50, 50, 50);
      resetMatrix();
  
       //sand
       translate(100,0,-500);
       rotateY(frameCount*0.008);
       texture(sand);
       box(50, 50, 50);
       resetMatrix();
  
       //dirt
       translate(-59,0,-200);
       rotateY(frameCount*0.008);
       texture(dirt);
       box(50, 50, 50);
       resetMatrix();
}