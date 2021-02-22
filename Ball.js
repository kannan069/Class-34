class Ball{
    constructor(x, y,r){
        var options={
           
            frictionAir:0.005,
            density:1
        }
       this.r = r
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //rectMode(CENTER);
        fill(255,255,0);
        circle(0,0,this.r*2);
        pop();
    }
}