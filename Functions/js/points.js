
function polarPoint() {
x = (r*Math.sin(mouseX))
y = (r*Math.cos(mouseX))
return createVector(x,y);
}

function setup(){
    createCanvas (800,600);
    background (0);
}

function draw () {
    res = polarPoint();
    translate(100,100);
    circle(res.x,res.y, 10);
}