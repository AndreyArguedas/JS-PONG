function Ai(){
    this.x = width;
    this.y = height/2;
    this.v = 3;
    this.w = 20;
    this.h = 80;
    this.points = 0;

    this.show = function(){
      rectMode(CENTER);
      rect(this.x,this.y,this.w,this.h)
    }

    this.move = function(b){
      if(b.x >= width/2)
        if(b.y < this.y)
          this.y -= this.v;
        else if(b.y > this.y)
          this.y += this.v;

    }

}
