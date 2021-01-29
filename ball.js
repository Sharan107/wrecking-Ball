class Ball{

    constructor(x,y){
    
    var options={
      frictionAir:0.005,
      density:1
    }
    

    this.r=80;
    
    this.body=Bodies.circle(x,y,80,options);
    World.add(world,this.body);
    
    
    }
    
    display(){
    
    var ballpos=this.body.position;
    
    push()
    translate(ballpos.x,ballpos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("blue");
     ellipse(0,0,this.r*2,this.r*2);
     pop()
    }
    }