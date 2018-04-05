let x = 0;
let y = 0;
let spacing = 30;

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);
}

function draw() {
    strokeWeight(4);
    stroke(random(255), random(255), random(255));
    if (random(1) < 0.5) {
        line(x, y, x + spacing, y + spacing);
    } else {
        line(x, y + spacing, x + spacing, y);
    }
    x += spacing;
    if (x > width) {
        x = 0;
        y += spacing;
    }
    if (y > height) {
        x = 0;
        y = 0;
    }
}