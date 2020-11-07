class Zombie {
    constructor(x, y, width, height) {
      var options = {
    'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.body.scale = 3;
      this.width = width;
      this.height = height;
      this.image = loadImage("zombie.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(5);
      stroke("yellow");
      fill(255);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  };