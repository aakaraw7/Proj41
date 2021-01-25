class Drops{
    constructor(x, y) {
        var options = {
          isStatic:false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Matter.Bodies.circle(x, y, 5, options);
        
        Matter.World.add(world, this.body);
      }
      update(){
        if(this.body.position.y>500){
          Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(0,500)})
        }
      }

      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill('skyblue')
        ellipseMode(RADIUS);
        ellipse(0, 0, 5,5);
        pop();
      }
}