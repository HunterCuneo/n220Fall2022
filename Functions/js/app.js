

function setup () {
    createCanvas (800,600);
    // Canvas for rectangle and wheels to rest in
}

function draw() {
    background(0);
    car(mouseX, mouseY);
    //make background black so car can be seen, use car(mouseX, mouseY) to make function track mouse movements
}

function car(x,y) {
    rect(mouseX - 200, mouseY, 400, 200);
    circle(mouseX - 200, mouseY + 200, 45);
    circle(mouseX + 200, mouseY + 200, 45);
    // Cicles with varying levels of + or - mouseX and mouseY so they stay the same distance from each other
}