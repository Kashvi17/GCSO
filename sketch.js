//create the sprites
var car;
var wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);

  //assign values; speed and weight
  speed = random(55,90);
  weight = random(400,1500);

  //assign values to car
  car = createSprite(150,200,50,50);
  car.velocityX = speed;
  
  //assign values to wall
  wall = createSprite(1300,200,50,height/2);
  wall.shapeColor = color(80,80,80);

}

function draw() {
  background(255,255,255);  

  //create the calculation of deformation
  if (wall.x - car.x < (car.width + wall.width)/2) {
    //console.log(car.x);
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if (deformation > 180) {
      car.shapeColor = color(255,0,0);
    }

    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230,230,0);
    }

    if (deformation < 100) {
      car.shapeColor = color(0,255,0);
    }

  }


  drawSprites();
}