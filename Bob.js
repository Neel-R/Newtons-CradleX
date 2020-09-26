class Bob  {
  constructor (x,y) {
    var options={
        'isStatic':false,
        'restitution':1.2,
        'friction':0.5,
        'density':0.5
    }
    this.body = Bodies.circle(x, y,50, options);
    this.radius = 50;

    World.add(world, this.body);
}
display() {
    push();
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius);
    pop(); 
}


  }
  