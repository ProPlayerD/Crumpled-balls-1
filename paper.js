class Paper {
    constructor(x, y) {
      var options = {
        density:0.2,
        friction: 0.5,
        restitution:0.5,
        isStatic : false
      };
      this.body = Bodies.circle(x, y, 25, options);
      this.radius = 25*2
      //this.image = loadImage("Paper.png");
      World.add(world, this.body);
    };
    display(){
       var pos = this.body.position;
       push();
       fill("white");
       //imageMode(CENTER);
       //image(this.image,pos.x,pos.y,this.width,this.width);
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.radius,this.radius)
       pop();

    };
  };