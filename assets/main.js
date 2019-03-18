new p5();

let w = 140;
let magicAngle;
let maxD;
let howMany = 128*64;
let orthoX;
let orthoY;
let orthoZ = w*w+4096;

let water;
let sand;
let grass;
let rock;
let dirt;
let snow;

function preload() {
    
    // grass = loadImage("grass.png");
    grass = loadImage("https://raw.githubusercontent.com/kttalley/terrain-generator/master/assets/grass.png");
}

function setup() {
    createCanvas(500, 500, WEBGL);
    orthoX = width;
    orthoY = height;
}

function draw() {
    background(200,200,0);
    rotateX(frameCount*0.01);
    texture(grass);
    box(200, 200, 200);

}