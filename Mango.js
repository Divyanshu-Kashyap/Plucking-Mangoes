class Mango{
    constructor(x, y,r) {
        var options = {
            isStatic:true,
            'restitution':0.5,
            'friction':4.0,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        this.image = loadImage("mango.png");
        World.add(world,this.body);
      }
      display(){
        var mangoPos=this.body.position;
        push();
        translate(mangoPos.x,mangoPos.y);
        rotate(this.body.angle);
        fill(255,0,255);
        imageMode(CENTER);
        ellipseMode(CENTRE);
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
      }
}