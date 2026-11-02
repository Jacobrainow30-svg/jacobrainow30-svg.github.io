let blueX = 100;
let blueY = 200;

let orangeX = 500;
let orangeY = 200;

let ballX = 300;
let ballY = 200;
let ballVX = 0;
let ballVY = 0;

let blueScore = 0;
let orangeScore = 0;
let playerSpeed = 4;
let ballBounce = 0.15;
let ballFriction = 0.98;
function setup() {
  createCanvas(600, 400);
}

let moveOrangeUp = false;
let moveOrangeDown = false;
let moveOrangeLeft = false;
let moveOrangeRight = false;

function draw() {
  background(40, 150, 65);

  stroke(255);
  strokeWeight(3);
  noFill();
  rect(10, 10, 580, 380);
  line(300, 10, 300, 390);
  circle(300, 200, 100);

  for (let i = 0; i < 5; i++) {
    line(150 + i * 75, 10, 150 + i * 75, 20);
  }
  rect(10, 150, 25, 100);
  rect(555, 150, 35, 100);

  if (keyIsDown(LEFT_ARROW)) blueX -= playerSpeed;
  if (keyIsDown(RIGHT_ARROW)) blueX += playerSpeed;
  if (keyIsDown(UP_ARROW)) blueY -= playerSpeed;
  if (keyIsDown(DOWN_ARROW)) blueY += playerSpeed;

  if (moveOrangeUp) orangeY -= playerSpeed;
  if (moveOrangeDown) orangeY += playerSpeed;
  if (moveOrangeLeft) orangeX -= playerSpeed;
  if (moveOrangeRight) orangeX += playerSpeed;

  blueX = constrain(blueX, 50, 550);
  blueY = constrain(blueY, 30, 370);
  orangeX = constrain(orangeX, 50, 550);
  orangeY = constrain(orangeY, 30, 370);

  ballX += ballVX;
  ballY += ballVY;

  if (ballY < 25 || ballY > 375) {
    ballVY *= -1;
  }
  if (ballX < 20 || ballX > 580) {
    ballVX *= -1;
  }
  ballVX *= 1.01;
  ballVY *= 1.01;

  ballVX *= ballFriction;
  ballVY *= ballFriction;

  
  if (dist(blueX, blueY, ballX, ballY) < 30) {
    ballVX = (ballX - blueX) * ballBounce;
    ballVY = (ballY - blueY) * ballBounce;
  }
  if (dist(orangeX, orangeY, ballX, ballY) < 30) {
    ballVX = (ballX - orangeX) * ballBounce;
    ballVY = (ballY - orangeY) * ballBounce;
  }
  if (ballX > 575 && ballY > 150 && ballY < 250) {
    blueScore++;
    resetBall();
  }
  if (ballX < 25 && ballY > 150 && ballY < 250) {
    orangeScore++;
    resetBall();
  }
  
  noStroke();
  fill(40, 100, 255);
  rect(blueX - 15, blueY - 10, 30, 20, 5);
  fill(180, 220, 255);
  rect(blueX - 7, blueY - 7, 14, 6, 2);

  fill(255, 130, 20);
  rect(orangeX - 15, orangeY - 10, 30, 20, 5);
  fill(255, 220, 150);
  rect(orangeX - 7, orangeY - 7, 14, 6, 2);

  fill(255);
  circle(ballX, ballY, 20);

  fill(255);
  textSize(20);
  textAlign(CENTER);
  text(blueScore + "-" + orangeScore, 300, 30);

  textSize(12);
  text("BLUE:Arrow KEYS", 105, 385);
  text("ORANGE:WASD", 490, 385);
}

function resetBall() {
  ballX = 300;
  ballY = 200;
  ballVX = 0;
  ballVY = 0;
  blueX = 100;
  blueY = 200;

  orangeX = 500;
  orangeY = 200;
}
function keyPressed() {
  if (key === "w" || key === "W") moveOrangeUp = true;
  if (key === "s" || key === "S") moveOrangeDown = true;
  if (key === "a" || key === "A") moveOrangeLeft = true;
  if (key === "d" || key === "D") moveOrangeRight = true;
  return false;
}

function keyReleased() {
  moveOrangeUp = false;
  moveOrangeDown = false;
  moveOrangeLeft = false;
  moveOrangeRight = false;
  return false;
}
