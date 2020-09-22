class Ball extends BaseClass{
    constructor(x,y) {
      super(x,y,radius);
      var options = {
  
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
     
      
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("yellow");
      ellipse(pos.x, pos.y,this.radius*2);
    }
  }
