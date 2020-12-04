function isTouching(movingRect,fixedRect){
    if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
      &&movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
      &&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
      &&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
        return true;
    }else{
        return false;
    }
}
function bounceOff(gameObject1,movingRect){
    if(gameObject1.x-movingRect.x<gameObject1.width/2+movingRect.width/2
      &&movingRect.x-gameObject1.x<gameObject1.width/2+movingRect.width/2
      &&movingRect.y-gameObject1.y<gameObject1.height/2+movingRect.height/2
      &&gameObject1.y-movingRect.y<gameObject1.height/2+movingRect.height/2){
        gameObject1.velocityX=gameObject1.velocityX*-1;
        movingRect.velocityX=movingRect.velocityX*-1;
  
        gameObject1.velocityY=gameObject1.velocityY*-1;
        movingRect.velocityY=movingRect.velocityY*-1;
    }
  }