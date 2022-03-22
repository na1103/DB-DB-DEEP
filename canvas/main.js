 var canvas = document. getElementById ( "draw-canavas" );
 var context = canvas. getContext ( "2d" );
 var color1=document.getElementById("red");
 var color2=document.getElementById("green");
 var color3=document.getElementById("black");
 var color4=document.getElementById("clear");

  context.fillStyle="rgb(0,0,0)";
  canvas.addEventListener ( "mousedown" , function (me) {
        mDown (me)});
  color1.addEventListener("click",changecolor);
  color2.addEventListener("click",changecolor1);
  color3.addEventListener("click",changecolor2);
  color4.addEventListener("click",changecolor3);
  function changecolor(){
     context.fillStyle='red';
  }
  function changecolor1(){
     context.fillStyle='green';
  }
  function changecolor2(){
     context.fillStyle='black';
  }
  function changecolor3(){
     context.clearRect(0,0,context.canvas.width,context.canvas.height);
  }

  function mDown(me)
  {
      canvasDraw(me.offsetX,me.offsetY);
  }
  function canvasDraw(currentX,currentY)
  {
   context.beginPath();
   context.arc(currentX,currentY,5,0,360);
   context.fill();
  }
