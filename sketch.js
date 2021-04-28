const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,Stone,iron;
var r2,r3,r4;
var s2,s3,s4;
var i2,i3,i4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    f5 = new Iron(500,300);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70);
    r2 = new Rubber (850,500,50);
    r3 = new Rubber(800,550,80);
    r4 = new Rubber(850,300,30);
    Stone = new stone(700,320,100,100)
    s2 = new stone(650,300,70,50);
    s3 = new stone(600,280,80,60);
    s4 = new stone(550,260,90,70);
    iron = new Iron(300,350);
    i2 = new Iron(350,340);
    i3 = new Iron(400,330);
    i4 = new Iron(450,320);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    f5.display();
    plane.display();
    hammer.display();
    rubber.display();
    Stone.display();
    iron.display();
    r2.display();
    r3.display();
    r4.display();
    s2.display();
    s3.display();
    s4.display();
    i2.display();
    i3.display();
    i4.display();
}
