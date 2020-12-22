class Paper{
  constructor(x,y,radius){  
      var options={
       isStatic: false,
       restitution:0.5,
       friction:0.5,
       density:1.2


      }
     this.paper=Bodies.circle(x,y,radius,options)
    this.radius=radius
    World.add(world,this.paper)

  }
    display(){
        push ();
        translate (this.paper.position.x,this.paper.position.y)
        fill ("pink")
        ellipseMode (RADIUS)
     ellipse(0,0,this.radius)
     pop ();
      

    }
}