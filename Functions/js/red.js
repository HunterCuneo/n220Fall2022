noRed = color(170,200,150)

function setup(){
    createCanvas (800,600);
    background (0);
    Redcolor = fill(170,200,150); //Sets the color to one that contains red
    noRed = fill(0,200,150); //sets the color to one that does not contain red
}

function ball() {
    circle(300, 300, 45); //circle created for testing color
    Redcolor; //sets default ball color to include red
}

function draw (x,y) {
    ball(); //creates ball on canvas
    noRed; //changes color to one that does not contain red
}