class SlingShot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyA = null;
    }

    attach() {
        this.sling.bodyA = stone.body;
        //Matter.Body.setLength(slingShot.body, 10);
        stone.body.position.x = 88;
        stone.body.position.y = 309;
    }

    display() {
        if(this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("black");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}