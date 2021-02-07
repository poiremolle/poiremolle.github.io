let size;

function setup() {
    canvas = createCanvas(550, 760);
        canvas.parent('canvasp');
    
    
    
    angleMode(DEGREES);
    
    rectMode(CENTER);
}

function draw() {
    

let h = hour();
let m = minute();
let s = second();
let colFirk = 7;
let rowFirk = 10;
    size = 30 + h;

 background(255 - (h * 10), (100 + m) - (h * 7), 230 - (h * 9));
    
    for (let p = 0; p < colFirk; p++) {
        for(let b = 0; b < rowFirk; b++) {

            push();
            translate(width / (colFirk - 1) * p + m, height / (rowFirk - 1) * b + h);
                rotate(10 + m * (p * b));
                noStroke();
            fill(155-h,195+m,175+s,205);
                rect(5 * p + h, 5 * b + m, size * p, size / b);
            pop();
        }
    }

 
let colDots = 35;
let rowDots = 20;
    for (let i = 0; i < colDots; i++) {
        for (let j = 0; j < rowDots; j++) {
        push();
        translate((width / colDots - 1) * i, (height / rowDots - 1) * j);
            rotate(h * (i + j));
            strokeWeight(9 + i);
            stroke(h * 10, h * 10, 255 - (h * 10));
            point(45 * i, 41 * j);
        pop();
        }
        
    }
    fill(h * 10, h * 10, 255 - (h * 10));
    textSize(42);
    textFont('Courier New');
    if (m > 9){ 
        text(h + ':' + m, 25, height - 25);
    }else {text(h + ': 0' + m, 25, height - 25);}

    
}