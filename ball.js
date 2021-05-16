class Ball{
  constructor(x, y, width, height) {
      var options = {
                   
      }
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
      this.ball=loadImage("sprites/polygon.png")
    }
    display(){
     
      push();
      imageMode(CENTER);
      image(this.ball,0,0);
      pop();
    }
}
