var x=0;
var direccion=1;

function setup() {
  createCanvas(800, 500);
}

function draw() 
{
  background(255);
  noStroke();
  // cielo
  fill(90+x/3, x/4+3, 90/2,200);
  rect(0,0,width, height/2);
  // sol
  fill(100+x/2,100+x/4,0);
  ellipse(450, 2*height/3-x/3, 200-x/8,200-x/8);
  fill(x/4+190,x/4+195,x/4+195);
  //montañas
   beginShape();
   vertex(0,250);
   vertex(0,150);
   vertex(25,125);
   vertex(100,100);
   vertex(125,100);
   vertex(150,125);
   vertex(125,100);
   vertex(150,150);
   vertex(175,175);
   vertex(200,160);
   vertex(210,115);
   vertex(250,175);
   vertex(275,200);
   vertex(300,175);
   vertex(325,125);
   vertex(350,100);
   vertex(375,125);
   vertex(400,150);
   vertex(425,195);
   vertex(450,230);
   vertex(450,240);
   vertex(530,150);
   vertex(550,100);
   vertex(600,50);
   vertex(610,75);
   vertex(650,75);
   vertex(680,100);
   vertex(725,150);
   vertex(775,125);
   vertex(800,100);
   vertex(800,250);
  endShape();
  // mar
  fill(180, 210, 250+x/6);
  rect(0,height/2, width, height);
  //reflejo
  fill(255,255,200,30);
  beginShape();
   vertex(0,250);
   vertex(0,350);
   vertex(25,375);
   vertex(100,450);
   vertex(125,400);
   vertex(150,375);
   vertex(125,400);
   vertex(150,350);
   vertex(175,315);
   vertex(200,350);
   vertex(210,375);
   vertex(250,325);
   vertex(275,300);
   vertex(300,325);
   vertex(325,375);
   vertex(350,400);

   vertex(400,350);
   vertex(425,280);
   vertex(450,280);
   vertex(450,290);
   vertex(530,350);
   vertex(550,400);
   vertex(600,450);
   vertex(610,425);
   vertex(650,425);
   vertex(680,400);
   vertex(725,350);
   vertex(775,375);
   vertex(800,400);
   vertex(800,250);
  endShape();
  
  //pinguino
  
   fill(255,255,255);
   ellipse(x+30,height/2-60,15,8);
   //pata lejos
  fill(250,150,60);
 ellipse(x+20,height/2-4,20,10);
 //barriga
  fill(60,100,255);
   ellipse(x,height/2-23,50,50);
   //barriguita 2
   fill(255,255,255);
   ellipse(x+15,height-275,20,30);
   //carita
 fill(20,0,200);
   ellipse(x,height/2-70,55,55);
   ellipse(x-5,height/2-20,10,20);
   fill(250,150,60);
   ellipse(x+4,height/2+6,20,10);
   fill(255,255,255);
   ellipse(x+10,height/2-65,20,20);
   fill(0,0,0);
   ellipse(x+14,height/2-65,8,8);
   //pico
   fill(250,150,60);
   ellipse(x+30,height/2-60,15,8);
   fill(255,255,255);
  
  x = x+1*direccion;
  if((x>width)||(x<0)) {
    direccion = direccion * -1;
  }
 
}
