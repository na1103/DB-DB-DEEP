var canvas=document.getElementByID('canvas');
var ctx=canvas.getContext('2d');

canvas.width=window.innerWidth-100;
canvas.height=window.innerWidth-100;

ctx.fillStyle='green';
ctx.fillRect(10,10,100,100);
