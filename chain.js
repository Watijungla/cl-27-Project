class Chain{
    constructor(bodyA, point){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 200
        }
        this.pointB=this.pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var point = this.pointB;
            strokeWeight(4);
            line(pointA.x, point.y, pointB.x, pointB.y);
        }
    }
}