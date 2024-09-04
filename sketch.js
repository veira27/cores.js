function setup() {
  createCanvas(400, 400);
  background("red")}

function draw() {
  if (mouseIsPressed)
     stroke ("blue");
   fill("white")
   rect(mouseX,mouseY,10,10);
}
