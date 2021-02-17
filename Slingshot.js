class Slingshot{
    constructor(bodyA, pointB ){              //Slingshot(bird.body ,log6.body)    // (bord.body, point values)
        var options = {
            bodyA: bodyA,                        // bodyA: bird.body
            //bodyB: bodyB, 
             pointB: pointB,                            // bodyB: log6.bodpointB
            
            stiffness: 0.06,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA){                           //true false
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}