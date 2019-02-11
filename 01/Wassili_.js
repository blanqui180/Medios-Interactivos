function setup() {
 createCanvas(430,400);
 //triangulo de la iz 
 stroke(160,140,70);
 fill(160,140,70);
quad(0,140,130,260,20,350,0,350);
//cuadro izquierda
//primera hilera
fill(255,255,255);
rect(0,160,20,20);
fill(0,0,0);
rect(0,180,20,20);
fill(255,255,255);
rect(0,200,20,20);
fill(0,0,0);
rect(0,220,20,20);
//segunda hilera
fill(150,150,150);
rect(20,160,20,20); 
fill(255,255,255);
rect(20,180,20,20);
fill(180,180,180);
rect(20,200,20,20);
fill(255,255,255);
rect(20,220,20,20);
//tercer hilera
rect(40,160,20,20);
fill(0,0,0);
rect(40,180,20,20);
fill(255,255,255);
rect(40,200,20,20);
fill(0,0,0);
rect(40,220,20,20);

//linea negra superior iz
stroke(0,0,0);
fill(0,0,0);
quad(67,0,100,0,0,100,0,67);
//linea negra inferior iz
quad(0,260,100,350,67,350,0,300);
//mini cuadrado jeje
quad(295,22,302,37,287,44,280,30);
//cuadrado azul
stroke(10,90,100);
fill(0,130,220,165);
quad(200,220,280,255,270,325,200,310);
//cuadrilatero amarillo
fill(255,230,20);
stroke(255,230,20);
quad(230,160,320,200,290,260,200,220);
//cuadrilatero rojo
stroke(255,50,0);
fill(255,50,50);
quad(280,130,260,290,210,280,210,130);
//cuadro derecha
//primera hilera
stroke(0,0,0);
fill(0,0,0);
rect(230,160,20,20);
fill(200,200,200);
rect(230,180,20,20);
fill(0,0,0);
rect(230,200,20,20); 
fill(200,200,200);
rect(230,220,20,20);
//segunda hilera
fill(150,150,150,200);
rect(250,160,20,20);
fill(100,100,100);
rect(250,180,20,20);
fill(255,255,255,100);
rect(250,200,20,20);
fill(0,0,0,160);
rect(250,220,20,20);
//tercer hilera 
fill(0,0,0,160);
rect(270,160,20,20);
fill(0,0,0,20);
rect(270,180,20,20);
fill(0,0,0,160);
rect(270,200,20,20);
fill(0,0,0,20);
rect(270,220,20,20);
//cuarta hilera
noFill()
rect(290,160,20,20);
fill(0,0,0,160);
rect(290,180,20,20);
noFill()
rect(290,200,20,20);
fill(0,0,0);
rect(290,220,20,20);
ellipse(-115,45,275,275);
//figura deforme
beginShape()
//parte superior
fill(90,0,100);
stroke(50,0,50);
vertex(35,150);
vertex(30,100);
curveVertex(90,70);
curveVertex(100,68);
curveVertex(100,65);
curveVertex(140,54);
curveVertex(215,70);



//parte lateral
curveVertex(240,200);
curveVertex(240,225);
curveVertex(225,270);

curveVertex(200,290);
curveVertex(170,300);
curveVertex(50,330);
curveVertex(0,340);

vertex(0,340);
vertex(0,320);

curveVertex(100,290);
curveVertex(165,240);
curveVertex(180,190);

curveVertex(155,155);
curveVertex(90,150);
curveVertex(80,150);
endShape(CLOSE)
//circulo 
fill(255,255,255);
ellipse(170,100,30,30);
//triangulo amarillo
stroke(255,230,20);
fill(255,230,20);
triangle(270,30,270,60,190,80);

}

function draw() {
  
}
