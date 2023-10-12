

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);
  
  var t = millis()/1000
  var loopT
  loopT = t%1
  
  var a= map(loopT , 0 ,1,100,0)
  
  
  
 
    
  noStroke()
  fill(100,a)
 square(0, 0, 400)
  fill(150);
  
   
  noStroke()
  fill(255, 120, 140,a)
  ellipse(width/2,height/2,300)
  fill(150);
  
  
  textSize(50);
text('welcome', width/2, height/2);
fill(0,a);
  
}
