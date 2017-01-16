var p;
var b;
var balls = [];
var a;
var lastPos;
var go = false;
function setup(){
    createCanvas(750,600);
    p = new Player();
    b = new Ball();
    for(var i = 0; i < 4; i++){
      balls[i] = new Ball();
    }
    a = new Ai();
}

function draw(){
    background(0);
    rect(width/2,0,10,600)
    textSize(48);
    fill(0, 102, 153);
    text(p.points, 30, 40);
    text(a.points, width - 80, 40);
    p.show();
    p.move(b);
    b.show();
    a.show();
    a.move(b);
    b.move();
    if(b.collision(p))
      b.xv = 5;
    if(b.collision(a))
      b.xv = -5;
    if(b.x < 0){
      a.points++;
      throwBall();
    }
    if(b.x > width){
        p.points++;
        throwBall();
    }
}

function throwBall(){
    if(balls.length > 0)
      b = balls.pop();
    else {
      showWinner();
      alert("Do you want to play again?");
      window.location.reload();
    }
}

function showWinner(){
  background(0);
  textSize(80);
  fill(0, 102, 153);
  if(p.points > a.points)
    text("YOU WIN", width/2 - 100, height/2);
  else if(a.points > p.points)
    text("YOU LOSE", width/2 - 100, height/2);
  else
    text("TIE", width/2 -100, height/2);

}
