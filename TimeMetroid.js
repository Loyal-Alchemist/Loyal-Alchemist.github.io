//{initalize Variable
var canvas = document.getElementById("canvasM");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var PlayerX = 0;
var PlayerY = 0;
var PlayerXV = 0;
var PlayerYV = 0;
var CameraXLock = false;
var CameraYLock = false;
var Map1D = [["Floor",-50,-100,500,20],["Floor",400,-200,100,20],["Floor",-290,300,20,800],["Floor",320,-40,200,20],["Floor",1000,-100,200,20],["Floor",1090,-50,20,100],["Respawn",385,-130]];
var Map1ND = [["Death",0,-1000,100000,20],["Door",1090,-50,20,100,2,10,0]];
var Map1 = Map1D.concat(Map1ND);
var Map2D = [["Floor",-20,5,20,100],["Floor",240,-35,500,20]];
var Map2ND = [["Death",0,-1000,100000,20],["Door",-20,5,20,100,1,1060,-65]];
var Map2 = Map2D.concat(Map2ND);
var curMapNum = 1;
var curMapName = "Map"+curMapNum;
var curMapDName = "Map"+curMapNum+"D";
var i = 0;
var m = 1;
var GravFail = false;
var decayingL = true;
var decayingR = true;
var belowPlatform = false;
const RespawnImage = new Image(30,60);
RespawnImage.src = 'TimeImages/SavePoint.png';
var RespawnMap = 1;
var RespawnX = 0;
var RespawnY = 0;
//}
//{Initlize Player
function drawPlayer(){
if(CameraXLock == true && CameraYLock == true){
ctx.fillRect(window.innerWidth/2-10,window.innerHeight/2-25,20,50);
}
if(CameraXLock == true && CameraYLock == false){
ctx.fillRect(window.innerWidth/2-10,window.innerHeight/2-25,20,50);
}
if(CameraXLock == false && CameraYLock == true){
ctx.fillRect(window.innerWidth/2-10,window.innerHeight/2-25,20,50);
}
if(CameraXLock == false && CameraYLock == false){
ctx.fillRect(window.innerWidth/2-10,window.innerHeight/2-25,20,50);
}
}
//}
//{Draw Objects
function drawObjects(){
i = 0
while(window[curMapDName].length > i){
if(window[curMapDName][i][0] == "Floor"){
ctx.fillRect(window.innerWidth/2-(window[curMapName][i][3]/2)+window[curMapName][i][1]+PlayerX, window.innerHeight/2-(window[curMapName][i][4]/2)-window[curMapName][i][2]+PlayerY,window[curMapName][i][3],window[curMapName][i][4]);
}
if(window[curMapDName][i][0] == "Respawn"){
ctx.drawImage(RespawnImage,window.innerWidth/2+window[curMapName][i][1]+PlayerX, window.innerHeight/2-window[curMapName][i][2]+PlayerY);
}
i += 1;
}
}
//}
//{Move
document.addEventListener("keydown", function(event) {
  if (event.repeat) {}
  else{
  if (event.keyCode == 87 && jumps > 0) {
    PlayerYV = 10;
    jumps -= 1;
  }
  if (event.keyCode == 68) {
    PlayerXV = -4;
    decayingL = false;
  }
  if (event.keyCode == 65) {
    PlayerXV = 4;
    decayingR = false;
  }
  }
  //console.log(event.keyCode);
});
document.addEventListener("keyup", function(event) {
  if (event.keyCode == 68) {
    decayingL = true;
  }
  if (event.keyCode == 65) {
    decayingR = true;
  }
  //console.log(event.keyCode);
});
var leftPlatform=true
function move(){
if(decayingL && decayingR){
  if(PlayerXV > 0){
    PlayerXV -= .5;
  }
  if(PlayerXV < 0){
    PlayerXV += .5;
  }
}
i = 0;
GravFail = false;
while (window[curMapName].length > i){
if(window[curMapName][i][0] == "Death" && PlayerX < -window[curMapName][i][1]+window[curMapName][i][3]/2+20 && PlayerX > -window[curMapName][i][1]-window[curMapName][i][3]/2-20 && PlayerY < window[curMapName][i][2]+window[curMapName][i][4]/2+35 && PlayerY > window[curMapName][i][2]-window[curMapName][i][4]/2-35){
PlayerY = RespawnY;
PlayerX = RespawnX;
curMapNum = RespawnMap;
curMapName = "Map"+curMapNum;
curMapDName = "Map"+curMapNum+"D";
PlayerYV = 0;
PlayerXV = 0;
}
if(window[curMapName][i][0] == "Door" && PlayerX < -window[curMapName][i][1]+window[curMapName][i][3]/2+20 && PlayerX > -window[curMapName][i][1]-window[curMapName][i][3]/2-20 && PlayerY < window[curMapName][i][2]+window[curMapName][i][4]/2+35 && PlayerY > window[curMapName][i][2]-window[curMapName][i][4]/2-35){
curMapNum = window[curMapName][i][5];
PlayerX = -window[curMapName][i][6];
PlayerY = window[curMapName][i][7];
curMapName = "Map"+curMapNum;
curMapDName = "Map"+curMapNum+"D";
return
}
if(window[curMapName][i][0] == "Respawn"){
if(!((PlayerY+PlayerYV-25) > (window[curMapName][i][2] + window[curMapName][i][4]/2) || (PlayerX-10 > (-window[curMapName][i][1]+window[curMapName][i][3]/2)) || (PlayerX+10 < (-window[curMapName][i][1]-window[curMapName][i][3]/2)))){
if(belowPlatform==false){
RespawnMap = curMapNum;
RespawnX = -15-window[curMapName][i][1];
RespawnY = -35+window[curMapName][i][2];
}}}
if(window[curMapName][i][0] == "Floor"){
if((PlayerY+PlayerYV+25) < (window[curMapName][i][4]/2+window[curMapName][i][2])){belowPlatform=true;}
if((PlayerX+PlayerXV+11) > (-window[curMapName][i][1]-window[curMapName][i][3]/2) && (PlayerX+PlayerXV-11) < (-window[curMapName][i][1]+window[curMapName][i][3]/2)){leftPlatform=true;}
if(!((PlayerY+PlayerYV-25) > (window[curMapName][i][2] + window[curMapName][i][4]/2) || (PlayerX-10 > (-window[curMapName][i][1]+window[curMapName][i][3]/2)) || (PlayerX+10 < (-window[curMapName][i][1]-window[curMapName][i][3]/2)))){
if(belowPlatform==false){
PlayerYV = 0;
GravFail = true;
jumps = 1;
}}
//if(leftPlatform==true){console.log("t");}
if(leftPlatform==true && ((Math.abs(PlayerY+PlayerYV-window[curMapName][i][2]+window[curMapName][i][4]/2) < window[curMapName][i][4]+15) == true)){
PlayerXV = 0;
}
leftPlatform=false;
belowPlatform=false;
}
i+=1;
}
if(GravFail == false){
PlayerYV -= .2;
}

PlayerY += PlayerYV;
PlayerX += PlayerXV;


}
//}
//{Tick
function tick(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
drawObjects();
drawPlayer();
move();
}
setInterval(tick,10);
//}