class Dustbin {
    constructor(x, y,width,height) {
      var options = {
        density:1.5,
        friction: 1.0,
        restitution:0.5,
        isStatic : true
      };
      this.body = Bodies.rectangle(x, y,width,height, options); 
      this.width = width;
      this.height = height;
      //this.image = loadImage("basket.png");
      World.add(world, this.body);
      
    };
    display(){
      var pos = this.body.position;

       rectMode(CENTER);
       rect(pos.x,pos.y,this.width,this.height);
       //rectMode(CENTER);
       //rect(pos.x,pos.y,this.width,this.height);
    };
  };