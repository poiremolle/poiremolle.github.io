let s;
let m;
let h;
let theDay;
let theMonth;
let theYear;
let flowerX;
let flowerY;

function setup() {
    
var canvas = createCanvas(750, 550);
    canvas.parent('canvasp');
    createP('');
    
    angleMode(DEGREES);
    
     flowerX = width / 2.9;
     flowerY = height;
}




function draw() {
    
    background(20, 160, 60);
    clock(width / 5, height / 3, width / 8);

   door(width * 0.67);
    
    flowerPot(flowerX, flowerY);

    table(width / 2, height * 0.75, width / 2.6, width / 60);
    
//    flowerX = flowerX + 2;
    
  
}




function flowerPot(px, py) {
        let rad = width / 40;
        let size = width / 100;
    //FLOWERPOT 
    
    fill(20, 20, 255);
  
    beginShape();
    vertex(px, py);
    vertex(px + size * 6, py);
    vertex(px + size * 8, py - size * 13);
    vertex(px - size * 8, py - size * 13);
    vertex(px - size * 6, py);
    endShape(CLOSE);
    
      //FLOWERS
        fill(20, 160, 60);
        rect(px - rad / 6, py - rad * 10, rad / 3, rad *4.8);
        fill(255);
        ellipse(px + rad * 1.4, py - rad * 10, rad * 2);
        ellipse(px - rad * 1.4, py - rad * 10, rad * 2);
        ellipse(px, py - rad * 11.4, rad * 2);
        ellipse(px, py - rad * 8.6, rad * 2);
    
       fill(210, 200, 0);
        ellipse(px,py - rad * 10 ,rad * 2);
}


    


function clock(x,y,r) {
        strokeWeight(r / 37.5);

//CLOCK BORDER    
fill(255,20,20);
    ellipse(x, y, r * 2);
    
//CLOCK CENTER
    fill(255);
    ellipse(x, y, r * 1.8);
    
//CLOCK EYES
    ellipse(x - r / 10, y - r / 3, r / 5, r / 2.5);
    ellipse(x + r / 10, y - r / 3, r / 5, r / 2.5);
    fill(0);
    ellipse(x - r / 7.5, y - r / 3, r / 10, r / 3.5);
    ellipse(x + r / 14.5, y - r / 3, r / 10, r / 3.5);
    
//CLOCK NOSE
    fill(210, 200, 0);
    ellipse(x, y, r * 0.2);
    
//CLOCK MARKERS
    for(let i = 0; i < 12; i++) {
        push();
        translate(x, y);
        rotate(i * 30)
        line(r * 0.7, 0, r * 0.8, 0);
        pop();
    }
    
//CLOCK SECONDS
    let s = second();
    let secRotate = map(s, 0, 60, -90, 270);
    push();
        translate(x, y);
        rotate(secRotate);
        stroke(255,20,20);
            line(0, 0, r * 0.8, 0);
    pop();
    
//CLOCK MINUTES
    let m = minute();
    let minRotate = map(m, 0, 60, -90, 270);
    push();
        translate(x, y);
        rotate(minRotate);
        strokeWeight(r / 25);
            line(0, 0, r * 0.7, 0);
    pop();
    
//CLOCK HOURS
    let h = hour();
    let hrRotate = map(h, 0, 12, -90, 270);
    push();
        translate(x, y);
        rotate(hrRotate);
        strokeWeight(r / 25);
            line(0, 0, r * 0.5, 0);
    pop();
}



function table(x,y,long,short) {
    
    //TABLE
    fill(120, 50, 20);
    rect(x + long * 0.2 - short, y, short, long / 2);
    rect(x + long * 0.8, y, short, long / 2);
    rect(x, y, long, short);
    
    //CALENDAR
    theDay = day();
    theMonth = month();
    theYear = year();
    
    fill(255);
    rect(x + long * 0.25, y - (long / 2.5) - 1, long / 2, long / 2.5);
    
    fill(255,20,20);
    rect(x + long * 0.25, y - (long / 2.5) - 1, long / 2, short * 2);
    
    fill(200);
    rect(x + long * 0.3, y - (long / 2.1), short, short * 3);
    rect(x + long * 0.66, y - (long / 2.1), short, short * 3);
    
    fill(0);
    textSize(width / 17);
    if(theDay < 10) {    
        text('0' + theDay, x + long * 0.3, y - long / 10);
    } else {text(theDay, x + long * 0.3, y - long / 10);}
    
    if(theMonth < 10) {    
        text('0' + theMonth, x + long * 0.54, y - long / 10);
    } else {text(theMonth, x + long / 4, y - long / 10);}
    
    line(x + long * 0.5, y - long / 2.5 + (short * 2), x + long * 0.5, y);
    
    textSize(width / 50);
    fill(255);
    text(theYear, x + long * 0.45, y - (long * 0.34));
    
    
}

function door(x) {
        let doorHeight = height * 0.9;
        fill(20, 20, 210);
    //noFill();
        rect(x, height - doorHeight, width * 0.3, doorHeight);
    
        rect(x + x * 0.035, height - doorHeight * 0.95, width * 0.25, doorHeight * 0.95);
    
    fill(210, 200, 0);
        ellipse(x + x * 0.35, doorHeight * 0.7, doorHeight * 0.075);
    }



