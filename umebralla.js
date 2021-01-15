class Umebralla{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=10;
        this.image();
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    circleMode(CENTER);
    fill("green");
    circle(0, 0, this.width, this.height);
    pop();
    }
}