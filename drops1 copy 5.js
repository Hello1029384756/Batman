class Drop3{ 
  constructor(x,y){
      var options = {
        friction:0.2,  
        restitution: 1.8
      }
    this.body = Bodies.rectangle(x,y,10,10,options);
    this.width = 10;
    this.height= 10;
    World.add(world,this.body);
  }
  
  
  display(){
   push();
   var pos = this.body.position;
   ellipse(pos.x,pos.y,this.width,this.height);
   this.body.color = color("red");
   pop();
  }
  }