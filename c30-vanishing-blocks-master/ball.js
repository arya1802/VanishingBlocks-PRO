class Ball {
  constructor(x, y,radius) {
    var options = {
        'restitution':1,
        'friction':1,
        'density':1    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("blue");
    ellipse(0, 0,this.radius);
    pop();
  }
}
