class Base extends BaseClass{
    constructor(x,y){
        super(x,y,width,height);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height)
    }
}