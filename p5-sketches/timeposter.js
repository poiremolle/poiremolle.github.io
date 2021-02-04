
function setup() {
    canvas = createCanvas(550, 760);
        canvas.parent('canvasp');
    
    
    
    angleMode(DEGREES);
    
    rectMode(CENTER);
}

function draw() {
    
background(255, 240, 230);
let h = hour();
let m = minute();
let colFirk = 5;
let rowFirk = 7;
    
    for (let p = 0; p < colFirk; p++) {
        for(let b = 0; b < rowFirk; b++) {

            push();
            translate(width / (colFirk - 1) * p, height / (rowFirk - 1) * b);
                rotate(m * (p + b));
                noStroke();
            fill(255);
                rect(45, 45, 30, 30);
            pop();
        }
    }

 
let colDots = 15;
let rowDots = 20;
    for (let i = 0; i < colDots; i++) {
        for (let j = 0; j < rowDots; j++) {
        push();
        translate((width / colDots - 1) * i, (height / rowDots - 1) * j);
            rotate(h * (i + j));
            strokeWeight(9);
            stroke(0, 0, 255);
            point(45 * i, 41 * j);
        pop();
        }
        
    }
    fill(0, 0, 255);
    textSize(42);
    textFont('Courier New');
    if (m > 9){ 
        text(h + ':' + m, 25, height - 25);
    }else {text(h + ': 0' + m, 25, height - 25);}

    
}