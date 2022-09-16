noRed = color(170,200,150)

function setup(){
    createCanvas (800,600);
    background (0);
    Redcolor = fill(170,200,150);
    noRed = fill(0,200,150);
}

function ball() {
    circle(300, 300, 45);
    Redcolor;
}

function draw (x,y) {
    ball();
    noRed;
}