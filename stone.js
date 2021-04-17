class Stone {
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'density':1.2,
            'friction':1,
            'restitution':0
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
        this.height = 40;
        this.r = 20;// added this to get the radius of the stone in the detectCollision function
        this.image = loadImage("images/stone.png");

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
        image(this.image, 0, 0, this.width, this.height);

        pop();
    }
}