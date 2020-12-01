class Mango {
    constructor(x, y, radius){
        var options = {
            isStatic: true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image = loadImage("Plucking mangoes/mango.png")
    this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      World.add(world, this.body);

    }
display(){
    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(RADIUS);
      noStroke();
      fill("grey");
      image(this.image, 0, 0, this.radius, this.radius);
      pop();
}
}