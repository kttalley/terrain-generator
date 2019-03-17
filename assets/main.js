new p5();

let w = 140;
let magicAngle;
let maxD;
let howMany = 128*64;
let orthoX;
let orthoY;
let orthoZ = w*w+4096;

let grass;
let stone;

function preload() {
    
    // grass = loadImage("grass.png");
}

function setup() {
    stone = loadImage("stone.png");
    createCanvas(width, height, WEBGL);
    orthoX = width;
    orthoY = height;
}

function draw() {
    texture(stone);
    box(200, 200, 200);

}