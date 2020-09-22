class Block extends BaseClass{
    constructor(x,y,width,height){
        
      
        World.add(world,this.body);
        this.Visiblity = 255
    
    }
    display(){
        if(this.body.speed < 3){
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 50, 50);
             pop();
           }
    var pos = this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x,pos.y,this.width,this.height)
}
}