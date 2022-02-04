//{Insantiate
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var playerXYZ = [0,0,0];
var obj1XYZ = [45,0,20];
var obj1Dim = [5,5,5];
ctx.fillStyle = "#FF0000";
//}
document.addEventListener('keydown', function(e){
   if(e.key == 'a')
   playerXYZ[0] -= 1;
   if(e.key == 'd')
   playerXYZ[0] += 1;
   if(e.key == 's')
   playerXYZ[2] -= 1;
   if(e.key == 'w')
   playerXYZ[2] += 1;
})
function drawCanvas(){
ctx.clearRect(0, 0, canvas.width, canvas.height);;
ctx.fillRect((obj1XYZ[0]-playerXYZ[0]-obj1Dim[0]*obj1XYZ[2]/)*canvas.width/100,.5*canvas.height,(obj1Dim[0])*canvas.width/100,.7*canvas.height);
}
setInterval(drawCanvas,100);