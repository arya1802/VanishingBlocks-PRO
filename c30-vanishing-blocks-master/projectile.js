class Projectile {
    constructor(bodyA,pointB) {
      var options = {
         bodyA: bodyA,
         pointB: pointB,
         stiffness: 0.06,
         length: 10
      }
      this.pointB = pointB;
      this.sling = Constraint.create(options);
      this.sling1 = loadImage ("sprites/sling1.png")
      this.sling2 = loadImage ("sprites/sling2.png")
      World.add(world, this.sling);
    }
    attach(body) {
      this.sling.bodyA = body;
    }
    fly() {
        this.sling.bodyA = null;
    }
    display(){
      image(this.sling1,1250,280,40,200)
      image(this.sling2,1224,283,40,110)
      if(this.sling.bodyA) {
        
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      strokeWeight(4);
      line(pointA.x,pointA.y,pointB.x+33,pointB.y+31);
      line(pointA.x,pointA.y,pointB.x-4,pointB.y+32);
      
      }
    }
  }