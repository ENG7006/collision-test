var myBall;

var otherBall;

var detectCollision = function(otherBall) {

  var distance = dist(this.position.x, this.position.y, otherBall.position.x, otherBall.position.y);
  var radiiSum = this.radius + otherBall.radius;
  return distance < radiiSum ? true : false;
  
  // paste code from your detectCollision() here

};

setup = function () {

  createCanvas(600, 600);
  myBall = new KeyedUpBall(width/2, height/2);
  myBall.initialize();

  myBall.detectCollision = detectCollision;

  otherBall = {
    radius: 100,

    position: new p5.Vector(width/2, height/2),

    update: function () {
      if (myBall.detectCollision(this)) {
        fill(100, 0, 200, 100);
      } else {
        fill(0, 100, 200, 100);
      }
    },

    display: function () {
      noStroke();
      ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    }
  };

};

draw = function() {

  background(0);

  myBall.update();
  myBall.display();

  otherBall.update();
  otherBall.display();

};
