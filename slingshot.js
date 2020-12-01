class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
            World.add(world, this.chain)
    }
    display(){
        if(this.chain.bodyA){
        var PA = this.chain.bodyA.position
        var PB = this.pointB
        strokeWeight(4);
        line(PA.x, PA.y, PB.x, PB.y);
        }
    }
    fly(){
        this.chain.bodyA = null;
    }
    attach(body){
        this.chain.bodyA = body;
    }
}

