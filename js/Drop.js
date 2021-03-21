class Drop {
    constructor (x,y,r) {

        var options = {
            restitution: 0.8,
            friction:1
        }
        this.r=r;
        this.x= random(1,500);
        this.y=y;
        this.body = Bodies.circle(this.x,this.y, this.r,options);
        this.color = color("blue")
        World.add(world,this.body);
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