class Mango {
    constructor(x, y, radius) {
        var options = {
            'isStatic':true,
            'density':3,
            'friction':1,
            'restitution':0
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.r = radius;//changed 'this.radius' to 'this.r'
        this.image = loadImage("images/mango.png");

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);
        rotate(angle);

        //fill("yellow");
        //rect(0, 0, this.width, this.height);
    
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);//this.r used here 

        pop();
    }
}