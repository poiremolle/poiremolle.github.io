function setup() {
  // put setup code h 
    
var canvas = createCanvas(250, 300);
    canvas.parent('canvasp');
    
    
     background(255, 206, 204);

smileyFace(255, 165, 35, 20, 40, 40,  PI, TWO_PI);
    
}


function smileyFace(r, g, b, mouthY, mouthW, mouthH, arcStart, arcStop) {
    strokeWeight(3);
    stroke(0);
    fill(r, g, b);
        ellipse(mouseX, mouseY, 75, 75); //face
    fill(0);
        ellipse(mouseX - 15, mouseY - 10, 10, 10); //eyes
        ellipse(mouseX + 15, mouseY - 10, 10, 10);
    noFill();
        arc(mouseX, mouseY + mouthY, mouthW, mouthH, arcStart, arcStop);
    
}




function draw() {
fill(255);
    noStroke();
    textSize(20);
    
    let t = "if (mouseIsPressed) { smileyFace(200, 105, 105, 3, 50, 50, 0, PI);} else {smileyFace(255, 165, 35, 20, 40, 40,  PI, TWO_PI); }";

text(t, 45, 10, 100, 400);
    
    if (mouseIsPressed) {
        
           smileyFace(200, 105, 105, 3, 50, 50, 0, PI);
        
    } else {smileyFace(255, 165, 35, 20, 40, 40,  PI, TWO_PI); }
 
    
}