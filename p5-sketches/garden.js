function setup() {
    
var canvas = createCanvas(600, 400);
    canvas.parent('canvasp');
createP('');
    
    let r = 255;
    let g = 255;
    let b = 255;
    let alp = 255;

    lighting = new Lighting (r, g, b, alp);

}




function draw() {
    background(255, 230, 240);
    noStroke(); // WALL
    fill(245, 208, 220); 
        rect(0, 0, width, height - 100); 
//    fill(255); // FLOOR MOULDING
//        rect(0, height - 115, width, 15);
    
    myTable();

    lighting.myWindow();

}

function myTable() {
    
    let tableX = 205;
    let tableY = 275;
    let tableW = 395;
    let tableH = 125;
    
    noStroke(); //TABLE BASE
    fill(255, 0, 0);
        rect(tableX - 3, tableY - 3, tableW + 8, tableH + 8, 8);
    
    // TABLE STRIPES
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 4; j++){
          noFill();
          stroke(120, 50, 225);
          strokeWeight(5);
              line(i * (tableW / 10) + tableX, tableY, i * (tableW / 10) + tableX, tableY + tableH);

              line(tableX, j * (tableH / 4) + tableY, tableX + tableW, j * (tableH / 4) + tableY);
        noStroke();
          }
        }
    
    
    fill(255); // VASE
    
        ellipse(tableX * 2, tableY, tableW/2);
        triangle(tableX * 1.8, tableY - tableY/2.5, tableX * 2.2, tableY - tableY/2.5, tableX * 2, tableY);
   } // end myTable

//class Snack {
//    
//    constructor(x, y) {
//        this
//    }
//}


class Lighting {
    
    constructor(r, g, b, alp) {
        this.r = r;
        this.b = b
        this.g = g;
        this.alpha = alp;
        }

    myWindow() {
        let clockTime = hour();
        let red = minute();
        let green = minute();
        let blue = minute();
        let alpha = minute();

    if (clockTime >= 6 && clockTime < 7) { 

        this.r = map(red, 0, 59, 40, 255);
        this.g = map(green, 0, 59, 60, 190);
        this.b = map(blue, 0, 59, 100, 190);

    //console.log('between 6-7');

    } else if (clockTime >= 7 && clockTime < 8) {

        this.r = map(red, 0, 59, 255, 145);
        this.g = map(green, 50, 59, 190, 220);
        this.b = map(blue, 50, 59, 190, 225); 

    //console.log('between 7-8');

    } else if (clockTime >= 8 && clockTime < 19) {

        this.r = 145;
        this.g = 220;
        this.b = 225;
    console.log(this.r);

    } else if (clockTime >= 19 && clockTime < 20) { 

        this.r = map(red, 0, 59, 145, 255);
        this.g = map(green, 0, 20, 220, 190);
        this.b = map(blue, 0, 20, 225, 190); 
        
    fill(0,255);    
        text('red ' + this.r + ' blue ' + this.b, 200, 20);
    

    } else if (clockTime >= 20 && clockTime < 21) {

        this.r = map(red, 0, 59, 255, 40);
        this.g = map(green, 0, 59, 190, 60);
        this.b = map(blue, 0, 59, 190, 100);
        
        fill(0,255)    
        text('between 20-21: ' + this.r, 200, 20);

    } else {

        this.r = 40;
        this.g = 60;
        this.b = 100;
        
        console.log('between 21-6'); 
    }

    //OUTSIDE
    let winX = 60;
    let winY = 25;
    let winW = 150;
    let winH = 200;


    noStroke();
    fill(this.r, this.g, this.b);
      rect(winX + 5, winY, winW, winH);

    // WINDOW FRAME
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){

            fill(255);
          //fill(120, 50, 225);
            rect(i * (winW / 2) + winX, winY, winH / 10, winH + 20, 8);
            rect(winX + 5, j * (winH / 2) + winY, winW, winH / 10);
        }
    }
        
    

    //ROOM LIGHT
  
    if (clockTime >= 20 && clockTime < 23 || clockTime >= 0 && clockTime < 7) { 
        this.alpha = 100;

    } else if (clockTime >= 7 && clockTime < 8) {
        this.alpha = map(alpha, 0, 30, 100, 0);

    } else if (clockTime >=8 && clockTime < 19) {
      this.alpha = 0;
    
    } else if (clockTime >=19 && clockTime < 20) {
        this.alpha = map(alpha, 30, 59, 0, 100);
                console.log("19-20 this is room light: " + this.alpha);

    } else {
        this.alpha = 100;
          console.log("20-21 this is room light: " + this.alpha);

    }

    fill(this.r, this.g, this.b, this.alpha);
        rect(0, 0, width, height);




        } // END myWindow
    
} // END LIGHTING CLASS






