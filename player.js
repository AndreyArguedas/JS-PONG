function Player(){
   this.x = 0;
   this.y = height/2;
   this.velocityy = 4;
   this.w = 20;
   this.h = 80;
   this.points = 0;

   this.show = function(){
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h)
   }

   this.move = function(b){
     if(b.x < width/2){
      if(p.y < mouseY)
       p.y += p.velocityy;
     else if(p.y > mouseY)
       p.y -= p.velocityy;
     }
   }

}
