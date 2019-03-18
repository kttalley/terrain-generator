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
    rotateX(frameCount*0.01);
    texture(grass);
    box(50, 50, 50);
    resetMatrix();

     //snow
     translate(100,0, -100);
     rotateX(frameCount*0.01);
     texture(snow);
     box(50, 50, 50);
     resetMatrix();

}