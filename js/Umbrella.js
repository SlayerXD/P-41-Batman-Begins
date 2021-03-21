class Umbrella {
    constructor(x,y,r) {

        this.r = r
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, r);
        this.color = color("white");
        World.add(world,this.body);
        this.image = loadImage("images/Walking Frame");
    }
    
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0, this.r, this.r);
        pop();
    }
}