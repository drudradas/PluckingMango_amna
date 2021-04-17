class Tree {
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'density':5,
            'friction':0.3,
            'restitution':1
        }
        this.body = Bodies.rectangle(x, y, 10, 10, options);
        this.width = 10;
        this.height = 10;
        this.image = loadImage("images/tree.png");

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
        image(this.image, 0, 0, 400, 400);

        pop();
    }
}