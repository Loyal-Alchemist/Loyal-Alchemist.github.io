//{Instantiate Variable
var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var cardS1 = document.getElementById("cardS1");
var cardS2 = document.getElementById("cardS2");
var cardS3 = document.getElementById("cardS3");
var cardS4 = document.getElementById("cardS4");
var cardS5 = document.getElementById("cardS5");
var HPE = document.getElementById("HPE");
var enemyIntent = document.getElementById("enemyIntent");
var topBar = document.getElementById("topBar");
var popup = document.getElementById("popup");
var rcard1 = document.getElementById("rcard1");
var rcard2 = document.getElementById("rcard2");
var rcard3 = document.getElementById("rcard3");
var closePopup = document.getElementById("close");
var deckNumber = document.getElementById("deckNumber");
var isMouseD1 = false;
var isMouseD2 = false;
var isMouseD3 = false;
var isMouseD4 = false;
var isMouseD5 = false;
var isMouseO1 = false;
var isMouseO2 = false;
var isMouseO3 = false;
var isMouseO4 = false;
var isMouseO5 = false;

var firsttime = true;

var storex;
var storey;

var cxcs1 = 1;
var cxcs2 = 2;
var cxcs3 = 3;
var cxcs4 = 4;
var cxcs5 = 5;

var cx;
var cy;
var scx;
var scy;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseup', onMouseup, false);

var cardS1Loc = cardS1.getBoundingClientRect();
var cardS2Loc = cardS2.getBoundingClientRect();
var cardS3Loc = cardS3.getBoundingClientRect();
var cardS4Loc = cardS4.getBoundingClientRect();
var cardS5Loc = cardS5.getBoundingClientRect();
var card1Loc = card1.getBoundingClientRect();
var card2Loc = card2.getBoundingClientRect();
var card3Loc = card3.getBoundingClientRect();
var card4Loc = card4.getBoundingClientRect();
var card5Loc = card5.getBoundingClientRect();

var combatTurn = 1;
//var deck = [["Attack","Effect","Damage:10x1"],["Defend","Effect","Block:10x1"],["Catalyst","Modification","AfterDamage:5,AfterBlock:5"],["Strengthen","Upgrade","Strength:3"],["Pummel","Effect","Damage:8x3,Strength:-2"]];
var deck = [["Attack","Effect","Damage:15x1"],["Attack","Effect","Damage:15x1"],["Attack","Effect","Damage:15x1"],["Attack","Effect","Damage:15x1"],["Defend","Effect","Block:15x1"],["Defend","Effect","Block:15x1"],["Defend","Effect","Block:15x1"],["Defend","Effect","Block:15x1"],["Catalyst","Modification","AfterDamage:5,AfterBlock:5"],["Catalyst","Modification","AfterDamage:5,AfterBlock:5"]];
var tdeck = [[]];
var ctdeck = [[]];
var hand = [["","",""],["","",""],["","",""],["","",""],["","",""]];
var effArrArr= [];
var effArr = [];
var effTimes = [];
var grabNum;
var i = 0;
var j = 0;

var possibleCards = [["Strengthen","Upgrade","Strength:3"],["Fortify","Upgrade","Fortify:3"],["Double Strike","Effect","Damage:8x2"],["Pummel","Effect","Damage:10x3,Strength:-2"],["Offensive Mode","Upgrade","Strength:8,Fortify:-4"],["Defensive Mode","Upgrade","Fortify:8,Strength:-4"]]
var rewardCard1 = [];
var rewardCard2 = [];
var rewardCard3 = [];
var rewardGold;

var cardDesc1;
var cardDesc2;
var cardDesc3;
var cardDesc4;
var cardDesc5;
var rcardDesc1;
var rcardDesc2;
var rcardDesc3;

var totDamage;
var damage1 = 0;
var basedamage1 = 0;
var damage2 = 0;
var basedamage2 = 0;
var damage3 = 0;
var basedamage3 = 0;
var damage4 = 0;
var basedamage4 = 0;
var damage5 = 0;
var basedamage5 = 0;

var totBlock;
var block1 = 0;
var baseblock1 = 0;
var block2 = 0;
var baseblock2 = 0;
var block3 = 0;
var baseblock3 = 0;
var block4 = 0;
var baseblock4 = 0;
var block5 = 0;
var baseblock5 = 0;

var strength = 0;
var strength1 = 0;
var strength2 = 0;
var strength3 = 0;
var strength4 = 0;
var strength5 = 0;

var tstrength1 = 0;
var tstrength2 = 0;
var tstrength3 = 0;
var tstrength4 = 0;
var tstrength5 = 0;

var fortification = 0;
var fortification1 = 0;
var fortification2 = 0;
var fortification3 = 0;
var fortification4 = 0;
var fortification5 = 0;

var tfortification1 = 0;
var tfortification2 = 0;
var tfortification3 = 0;
var tfortification4 = 0;
var tfortification5 = 0;

var depth = 1;
var enemyElite = false;
var enemyNum = 1;
var enemyDamageMod = 1.0;
var enemyBlockMod = 1.0;
var enemyHPMod = 1.0;
var enemyDamage = 0;
var enemyBlock = 0;
var enemyHP = 0;
var attackType;
var enemyBlockCur = 0;
var HP = 100;
var MaxHP = 100;

var oghand;

var reward = 0;

var battleGoing = true;
//}
//{On Mouse Down
function mouseDown1(){
storey = card1.style.top;
storex = card1.style.left;
isMouseD1 = true;
}
function mouseDown2(){
storey = card2.style.top;
storex = card2.style.left;
isMouseD2 = true;
}
function mouseDown3(){
storey = card3.style.top;
storex = card3.style.left;
isMouseD3 = true;
}
function mouseDown4(){
storey = card4.style.top;
storex = card4.style.left;
isMouseD4 = true;
}
function mouseDown5(){
storey = card5.style.top;
storex = card5.style.left;
isMouseD5 = true;
}
//}
//{On Mouse Up
function onMouseup(e){

  if(!isMouseO1 && !isMouseO2 && !isMouseO3 && !isMouseO4 && !isMouseO5 && isMouseD1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(!isMouseO1 && !isMouseO2 && !isMouseO3 && !isMouseO4 && !isMouseO5 && isMouseD2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(!isMouseO1 && !isMouseO2 && !isMouseO3 && !isMouseO4 && !isMouseO5 && isMouseD3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(!isMouseO1 && !isMouseO2 && !isMouseO3 && !isMouseO4 && !isMouseO5 && isMouseD4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(!isMouseO1 && !isMouseO2 && !isMouseO3 && !isMouseO4 && !isMouseO5 && isMouseD5){
  card5.style.top = storey;
  card5.style.left = storex;
  }

  if(isMouseO1 && isMouseD1){
  if(cxcs1 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs1 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs1 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs1 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card1.style.top = (Math.round(cardS1Loc.top)-5) + "px";
  card1.style.left = (Math.round(cardS1Loc.left)) + "px";
  }
  
  
  if(isMouseO2 && isMouseD1){
  if(cxcs2 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs2 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs2 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs2 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card1.style.top = (Math.round(cardS2Loc.top)-5) + "px";
  card1.style.left = (Math.round(cardS2Loc.left)) + "px";
  }
  
  
  if(isMouseO3 && isMouseD1){
  if(cxcs3 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs3 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs3 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs3 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card1.style.top = (Math.round(cardS3Loc.top)-5) + "px";
  card1.style.left = (Math.round(cardS3Loc.left)) + "px";
  }
  
  
  if(isMouseO4 && isMouseD1){
  if(cxcs4 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs4 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs4 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs4 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card1.style.top = (Math.round(cardS4Loc.top)-5) + "px";
  card1.style.left = (Math.round(cardS4Loc.left)) + "px";
  }
  
  
  if(isMouseO5 && isMouseD1){
  if(cxcs5 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs5 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs5 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs5 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card1.style.top = (Math.round(cardS5Loc.top)-5) + "px";
  card1.style.left = (Math.round(cardS5Loc.left)) + "px";
  }
  
  //Next
  
  
  if(isMouseO1 && isMouseD2){
  if(cxcs1 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs1 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs1 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs1 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card2.style.top = (Math.round(cardS1Loc.top)-5) + "px";
  card2.style.left = (Math.round(cardS1Loc.left)) + "px";
  }
  
  
  if(isMouseO2 && isMouseD2){
  if(cxcs2 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs2 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs2 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs2 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card2.style.top = (Math.round(cardS2Loc.top)-5) + "px";
  card2.style.left = (Math.round(cardS2Loc.left)) + "px";
  }
  
  
  if(isMouseO3 && isMouseD2){
  if(cxcs3 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs3 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs3 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs3 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card2.style.top = (Math.round(cardS3Loc.top)-5) + "px";
  card2.style.left = (Math.round(cardS3Loc.left)) + "px";
  }
  
  
  if(isMouseO4 && isMouseD2){
  if(cxcs4 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs4 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs4 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs4 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card2.style.top = (Math.round(cardS4Loc.top)-5) + "px";
  card2.style.left = (Math.round(cardS4Loc.left)) + "px";
  }
  
  
  if(isMouseO5 && isMouseD2){
  if(cxcs5 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs5 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs5 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs5 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card2.style.top = (Math.round(cardS5Loc.top)-5) + "px";
  card2.style.left = (Math.round(cardS5Loc.left)) + "px";
  }
  
  //Next
  
  
  if(isMouseO1 && isMouseD3){
  if(cxcs1 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs1 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs1 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs1 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card3.style.top = (Math.round(cardS1Loc.top)-5) + "px";
  card3.style.left = (Math.round(cardS1Loc.left)) + "px";
  }
  
  
  if(isMouseO2 && isMouseD3){
  if(cxcs2 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs2 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs2 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs2 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card3.style.top = (Math.round(cardS2Loc.top)-5) + "px";
  card3.style.left = (Math.round(cardS2Loc.left)) + "px";
  }
  
  
  if(isMouseO3 && isMouseD3){
  if(cxcs3 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs3 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs3 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs3 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card3.style.top = (Math.round(cardS3Loc.top)-5) + "px";
  card3.style.left = (Math.round(cardS3Loc.left)) + "px";
  }
  
  
  if(isMouseO4 && isMouseD3){
  if(cxcs4 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs4 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs4 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs4 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card3.style.top = (Math.round(cardS4Loc.top)-5) + "px";
  card3.style.left = (Math.round(cardS4Loc.left)) + "px";
  }
  
  
  if(isMouseO5 && isMouseD3){
  if(cxcs5 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs5 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs5 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  if(cxcs5 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card3.style.top = (Math.round(cardS5Loc.top)-5) + "px";
  card3.style.left = (Math.round(cardS5Loc.left)) + "px";
  }
  
  //next
  
  
  if(isMouseO1 && isMouseD4){
  if(cxcs1 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs1 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs1 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs1 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card4.style.top = (Math.round(cardS1Loc.top)-5) + "px";
  card4.style.left = (Math.round(cardS1Loc.left)) + "px";
  }
  
  
  if(isMouseO2 && isMouseD4){
  if(cxcs2 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs2 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs2 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs2 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card4.style.top = (Math.round(cardS2Loc.top)-5) + "px";
  card4.style.left = (Math.round(cardS2Loc.left)) + "px";
  }
  
  
  if(isMouseO3 && isMouseD4){
  if(cxcs3 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs3 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs3 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs3 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card4.style.top = (Math.round(cardS3Loc.top)-5) + "px";
  card4.style.left = (Math.round(cardS3Loc.left)) + "px";
  }
  
  
  if(isMouseO4 && isMouseD4){
  if(cxcs4 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs4 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs4 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs4 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card4.style.top = (Math.round(cardS4Loc.top)-5) + "px";
  card4.style.left = (Math.round(cardS4Loc.left)) + "px";
  }
  
  
  if(isMouseO5 && isMouseD4){
  if(cxcs5 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs5 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs5 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs5 == 5){
  card5.style.top = storey;
  card5.style.left = storex;
  }
  card4.style.top = (Math.round(cardS5Loc.top)-5) + "px";
  card4.style.left = (Math.round(cardS5Loc.left)) + "px";
  }
  
  //Next
  
  
  if(isMouseO1 && isMouseD5){
  if(cxcs1 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs1 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs1 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs1 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  card5.style.top = (Math.round(cardS1Loc.top)-5) + "px";
  card5.style.left = (Math.round(cardS1Loc.left)) + "px";
  }
  
  
  if(isMouseO2 && isMouseD5){
  if(cxcs2 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs2 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs2 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs2 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  card5.style.top = (Math.round(cardS2Loc.top)-5) + "px";
  card5.style.left = (Math.round(cardS2Loc.left)) + "px";
  }
  
  
  if(isMouseO3 && isMouseD5){
  if(cxcs3 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs3 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs3 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs3 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  card5.style.top = (Math.round(cardS3Loc.top)-5) + "px";
  card5.style.left = (Math.round(cardS3Loc.left)) + "px";
  }
  
  
  if(isMouseO4 && isMouseD5){
  if(cxcs4 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs4 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs4 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs4 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  card5.style.top = (Math.round(cardS4Loc.top)-5) + "px";
  card5.style.left = (Math.round(cardS4Loc.left)) + "px";
  }
  
  
  if(isMouseO5 && isMouseD5){
  if(cxcs5 == 1){
  card1.style.top = storey;
  card1.style.left = storex;
  }
  if(cxcs5 == 2){
  card2.style.top = storey;
  card2.style.left = storex;
  }
  if(cxcs5 == 3){
  card3.style.top = storey;
  card3.style.left = storex;
  }
  if(cxcs5 == 4){
  card4.style.top = storey;
  card4.style.left = storex;
  }
  card5.style.top = (Math.round(cardS5Loc.top)-5) + "px";
  card5.style.left = (Math.round(cardS5Loc.left)) + "px";
  }
  
  if(card1.style.left == (Math.round(cardS1Loc.left)) + "px"){
  cxcs1 = 1;}
  if(card2.style.left == (Math.round(cardS1Loc.left)) + "px"){
  cxcs1 = 2;}
  if(card3.style.left == (Math.round(cardS1Loc.left)) + "px"){
  cxcs1 = 3;}
  if(card4.style.left == (Math.round(cardS1Loc.left)) + "px"){
  cxcs1 = 4;}
  if(card5.style.left == (Math.round(cardS1Loc.left)) + "px"){
  cxcs1 = 5;}
  
  if(card1.style.left == (Math.round(cardS2Loc.left)) + "px"){
  cxcs2 = 1;}
  if(card2.style.left == (Math.round(cardS2Loc.left)) + "px"){
  cxcs2 = 2;}
  if(card3.style.left == (Math.round(cardS2Loc.left)) + "px"){
  cxcs2 = 3;}
  if(card4.style.left == (Math.round(cardS2Loc.left)) + "px"){
  cxcs2 = 4;}
  if(card5.style.left == (Math.round(cardS2Loc.left)) + "px"){
  cxcs2 = 5;}
 
  if(card1.style.left == (Math.round(cardS3Loc.left)) + "px"){
  cxcs3 = 1;}
  if(card2.style.left == (Math.round(cardS3Loc.left)) + "px"){
  cxcs3 = 2;}
  if(card3.style.left == (Math.round(cardS3Loc.left)) + "px"){
  cxcs3 = 3;}
  if(card4.style.left == (Math.round(cardS3Loc.left)) + "px"){
  cxcs3 = 4;}
  if(card5.style.left == (Math.round(cardS3Loc.left)) + "px"){
  cxcs3 = 5;}
  
  if(card1.style.left == (Math.round(cardS4Loc.left)) + "px"){
  cxcs4 = 1;}
  if(card2.style.left == (Math.round(cardS4Loc.left)) + "px"){
  cxcs4 = 2;}
  if(card3.style.left == (Math.round(cardS4Loc.left)) + "px"){
  cxcs4 = 3;}
  if(card4.style.left == (Math.round(cardS4Loc.left)) + "px"){
  cxcs4 = 4;}
  if(card5.style.left == (Math.round(cardS4Loc.left)) + "px"){
  cxcs4 = 5;}
 
  if(card1.style.left == (Math.round(cardS5Loc.left)) + "px"){
  cxcs5 = 1;}
  if(card2.style.left == (Math.round(cardS5Loc.left)) + "px"){
  cxcs5 = 2;}
  if(card3.style.left == (Math.round(cardS5Loc.left)) + "px"){
  cxcs5 = 3;}
  if(card4.style.left == (Math.round(cardS5Loc.left)) + "px"){
  cxcs5 = 4;}
  if(card5.style.left == (Math.round(cardS5Loc.left)) + "px"){
  cxcs5 = 5;}
  
  isMouseD1 = false;
  isMouseD2 = false;
  isMouseD3 = false;
  isMouseD4 = false;
  isMouseD5 = false;
    
}
//}
//{On Mouse Update
function onMouseUpdate(e) {
  cx = e.clientX;
  cy = e.clientY;
  //console.log(cx, cy);
}
//}
//{Turn Start
function startTurn(){
    
    
    attackType = Math.floor(Math.random()*3)+1;
    if(attackType == 1){
    enemyIntent.innerHTML = "The Enemy intends to deal: " + enemyDamage + " damage";
    }
    if(attackType == 2){
    enemyIntent.innerHTML = "The Enemy intends to Gain: " + enemyBlock + " block";
    }
    if(attackType == 3){
    enemyIntent.innerHTML = "The Enemy intends to deal: " + enemyDamage + " damage, and gain: " + enemyBlock + " block";
    }
    
    card1.style.top = (Math.round(cardS1Loc.top)-5) + "px";
    card1.style.left = (Math.round(cardS1Loc.left)) + "px";
    card2.style.top = (Math.round(cardS2Loc.top)-5) + "px";
    card2.style.left = (Math.round(cardS2Loc.left)) + "px";
    card3.style.top = (Math.round(cardS3Loc.top)-5) + "px";
    card3.style.left = (Math.round(cardS3Loc.left)) + "px";
    card4.style.top = (Math.round(cardS4Loc.top)-5) + "px";
    card4.style.left = (Math.round(cardS4Loc.left)) + "px";
    card5.style.top = (Math.round(cardS5Loc.top)-5) + "px";
    card5.style.left = (Math.round(cardS5Loc.left)) + "px";
    cxcs1 = 1;
    cxcs2 = 2;
    cxcs3 = 3;
    cxcs4 = 4;
    cxcs5 = 5;
    
    if(combatTurn == 1){
    tdeck = JSON.parse(JSON.stringify(deck));
    console.log("test");
    }
    combatTurn += 1;
    ctdeck = JSON.parse(JSON.stringify(tdeck));
    console.log(ctdeck);
    
    ctdeck = JSON.parse(JSON.stringify(tdeck));
    
    j=0;
    
    while (j < 5){
    grabNum = Math.floor(Math.random()*ctdeck.length);
    while (i < 3){
    hand[j][i] = ctdeck[grabNum][i];
    i+=1;
    }
    ctdeck.splice(grabNum,1);
    i = 0;
    j+=1;
    }
    oghand = JSON.parse(JSON.stringify(hand));
}
    function checkHand(){

        
    damage1 = 0;
    basedamage1 = 0;
    damage2 = 0;
    basedamage2 = 0;
    damage3 = 0;
    basedamage3 = 0;
    damage4 = 0;
    basedamage4 = 0;
    damage5 = 0;
    basedamage5 = 0;

    block1 = 0;
    baseblock1 = 0;
    block2 = 0;
    baseblock2 = 0;
    block3 = 0;
    baseblock3 = 0;
    block4 = 0;
    baseblock4 = 0;
    block5 = 0;
    baseblock5 = 0;

    strength1 = 0;
    strength2 = 0;
    strength3 = 0;
    strength4 = 0;
    strength5 = 0;

    tstrength1 = 0;
    tstrength2 = 0;
    tstrength3 = 0;
    tstrength4 = 0;
    tstrength5 = 0;

    fortification1 = 0;
    fortification2 = 0;
    fortification3 = 0;
    fortification4 = 0;
    fortification5 = 0;

    tfortification1 = 0;
    tfortification2 = 0;
    tfortification3 = 0;
    tfortification4 = 0;
    tfortification5 = 0;
    
    
        
    effArrArr = hand[0][2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage1 = (effTimes[0]*1+strength*1);
    damage1 = (basedamage1*effTimes[1]*1);
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock1 = (effTimes[0]*1+fortification*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength1 = effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification1 = effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength1 = effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification1 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    cardDesc1 ="";
    if(basedamage1 > 0){
    cardDesc1 = cardDesc1.concat("Deal: ",basedamage1,"*",effTimes[1]," damage <br>");
    }
    if(baseblock1 > 0){
    cardDesc1 = cardDesc1.concat("Gain: ",baseblock1," block <br>");
    }
    if(tstrength1 > 0){
    cardDesc1 = cardDesc1.concat("Further Cells deal: ",tstrength1," more damage <br>");
    }
    if(tfortification1 > 0){
    cardDesc1 = cardDesc1.concat("Further Cells gain: ",tfortification1," more block <br>");
    }
    if(strength1 > 0){
    cardDesc1 = cardDesc1.concat("Gain: ",strength1," Strength <br>");
    }
    if(strength1 < 0){
    cardDesc1 = cardDesc1.concat("Lose: ",-strength1," Strength <br>");
    }
    if(fortification1 > 0){
    cardDesc1 = cardDesc1.concat("Gain: ",fortification1," Fortification <br>");
    }
    if(fortification1 < 0){
    cardDesc1 = cardDesc1.concat("Lose: ",-fortification1," Fortification <br>");
    }
    
    effArrArr = hand[1][2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage2= (effTimes[0]*1+strength*1+strength1*1+tstrength1*1);
    damage2 = basedamage2*effTimes[1]*1;
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock2= (effTimes[0]*1+fortification*1+fortification1*1+tfortification1*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength2= effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification2= effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength2= effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification2 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    cardDesc2 ="";
    if(basedamage2 > 0){
    cardDesc2 = cardDesc2.concat("Deal: ",basedamage2,"*",effTimes[1]," damage <br>");
    }
    if(baseblock2 > 0){
    cardDesc2 = cardDesc2.concat("Gain: ",baseblock2," block <br>");
    }
    if(tstrength2 > 0){
    cardDesc2 = cardDesc2.concat("Further Cells deal: ",tstrength2," more damage <br>");
    }
    if(tfortification2 > 0){
    cardDesc2 = cardDesc2.concat("Further Cells gain: ",tfortification2," more block <br>");
    }
    if(strength2 > 0){
    cardDesc2 = cardDesc2.concat("Gain: ",strength2," Strength <br>");
    }
    if(strength2 < 0){
    cardDesc2 = cardDesc2.concat("Lose: ",-strength2," Strength <br>");
    }
    if(fortification2 > 0){
    cardDesc2 = cardDesc2.concat("Gain: ",fortification2," Fortification <br>");
    }
    if(fortification2 < 0){
    cardDesc2 = cardDesc2.concat("Lose: ",-fortification2," Fortification <br>");
    }
    
    effArrArr = hand[2][2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage3= (effTimes[0]*1+strength*1+strength1*1+tstrength1*1+strength2*1+tstrength2*1);
    damage3 = basedamage3*effTimes[1]*1;    
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock3= (effTimes[0]*1+fortification*1+fortification1*1+tfortification1*1+fortification2*1+tfortification2*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength3= effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification3= effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength3= effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification3 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    cardDesc3 ="";
    if(basedamage3 > 0){
    cardDesc3 = cardDesc3.concat("Deal: ",basedamage3,"*",effTimes[1]," damage <br>");
    }
    if(baseblock3 > 0){
    cardDesc3 = cardDesc3.concat("Gain: ",baseblock3," block <br>");
    }
    if(tstrength3 > 0){
    cardDesc3 = cardDesc3.concat("Further Cells deal: ",tstrength3," more damage <br>");
    }
    if(tfortification3 > 0){
    cardDesc3 = cardDesc3.concat("Further Cells gain: ",tfortification3," more block <br>");
    }
    if(strength3 > 0){
    cardDesc3 = cardDesc3.concat("Gain: ",strength3," Strength <br>");
    }
    if(strength3 < 0){
    cardDesc3 = cardDesc3.concat("Lose: ",-strength3," Strength <br>");
    }
    if(fortification3 > 0){
    cardDesc3 = cardDesc3.concat("Gain: ",fortification3," Fortification <br>");
    }
    if(fortification3 < 0){
    cardDesc3 = cardDesc3.concat("Lose: ",-fortification3," Fortification <br>");
    }
    
    effArrArr = hand[3][2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage4 = (effTimes[0]*1+strength*1+strength1*1+tstrength1*1+strength2*1+tstrength2*1+strength3*1+tstrength3*1);
    damage4 = basedamage4*effTimes[1]*1;
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock4= (effTimes[0]*1+fortification*1+fortification1*1+tfortification1*1+fortification2*1+tfortification2*1+fortification3*1+tfortification3*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength4= effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification4= effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength4 = effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification4 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    cardDesc4 ="";
    if(basedamage4 > 0){
    cardDesc4 = cardDesc4.concat("Deal: ",basedamage4,"*",effTimes[1]," damage <br>");
    }
    if(baseblock4 > 0){
    cardDesc4 = cardDesc4.concat("Gain: ",baseblock4," block <br>");
    }
    if(tstrength4 > 0){
    cardDesc4 = cardDesc4.concat("Further Cells deal: ",tstrength4," more damage <br>");
    }
    if(tfortification4 > 0){
    cardDesc4 = cardDesc4.concat("Further Cells gain: ",tfortification4," more block <br>");
    }
    if(strength4 > 0){
    cardDesc4 = cardDesc4.concat("Gain: ",strength4," Strength <br>");
    }
    if(strength4 < 0){
    cardDesc4 = cardDesc4.concat("Lose: ",-strength4," Strength <br>");
    }
    if(fortification4 > 0){
    cardDesc4 = cardDesc4.concat("Gain: ",fortification4," Fortification <br>");
    }
    if(fortification4 < 0){
    cardDesc4 = cardDesc4.concat("Lose: ",-fortification4," Fortification <br>");
    }
    
    effArrArr = hand[4][2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage5= (effTimes[0]*1+strength*1+strength1*1+tstrength1*1+strength2*1+tstrength2*1+strength3*1+tstrength3*1+strength4*1+tstrength4*1);
    damage5 = basedamage5*effTimes[1]*1;    
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock5= (effTimes[0]*1+fortification*1+fortification1*1+tfortification1*1+fortification2*1+tfortification2*1+fortification3*1+tfortification3*1+tfortification4*1+fortification4*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength5= effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification5= effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength5= effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification5 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    cardDesc5 ="";
    if(basedamage5 > 0){
    cardDesc5 = cardDesc5.concat("Deal: ",basedamage5,"*",effTimes[1]," damage <br>");
    }
    if(baseblock5 > 0){
    cardDesc5 = cardDesc5.concat("Gain: ",baseblock5," block <br>");
    }
    if(tstrength5 > 0){
    cardDesc5 = cardDesc5.concat("Further Cells deal: ",tstrength5," more damage <br>");
    }
    if(tfortification5 > 0){
    cardDesc5 = cardDesc5.concat("Further Cells gain: ",tfortification5," more block <br>");
    }
    if(strength5 > 0){
    cardDesc5 = cardDesc5.concat("Gain: ",strength5," Strength <br>");
    }
    if(strength5 < 0){
    cardDesc5 = cardDesc5.concat("Lose: ",-strength5," Strength <br>");
    }
    if(fortification5 > 0){
    cardDesc5 = cardDesc5.concat("Gain: ",fortification5," Fortification <br>");
    }
    if(fortification5 < 0){
    cardDesc5 = cardDesc5.concat("Lose: ",-fortification5," Fortification <br>");
    }
    
    totDamage = damage1*1+damage2*1+damage3*1+damage4*1+damage5*1;
    totBlock = baseblock1*1+baseblock2*1+baseblock3*1+baseblock4*1+baseblock5*1;
    HPE.innerHTML = "<img src='DragImages/heart-icon-3346.png' width=\"64\" height=\"64\">" + HP + "/" + MaxHP + ". Enemy HP: " + enemyHP + ".";
    card1.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    }
    //}
//{Turn End
    function endTurn(){
    if(battleGoing == true){
    strength += strength1*1+strength2*1+strength3*1+strength4*1+strength5*1;
    fortification += fortification1*1+fortification2*1+fortification3*1+fortification4*1+fortification5*1;    
    if(totDamage > enemyBlockCur){
    enemyHP -= totDamage*1-enemyBlockCur*1;
    }
    if (enemyHP <= 0){
    battleGoing = false;
    basicReward();
    //nextDepth();
    }
    if(attackType == 1 || attackType == 3){
    if(enemyDamage > totBlock){
    HP -= enemyDamage*1-totBlock*1;
    console.log(totBlock)
    }}
    enemyBlockCur = 0;
    if(attackType == 2 || attackType == 3){
    enemyBlockCur += enemyBlock;
    }
    totBlock = 0;
    startTurn();     
    }
    }
    //}
//{examine Hand
    function reexamine(){
    hand = oghand.slice(0);
    if(cxcs1 == 1 && cxcs2 == 2 && cxcs3 == 3 && cxcs4 == 5 && cxcs5 == 4){
    console.log("swap 4 and 5");
    [hand[4], hand[3]] = [hand[3], hand[4]];
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 1 && cxcs2 == 2 && cxcs3 == 4 && cxcs4 == 3 && cxcs5 == 5){
    console.log("swap 3 and 4");
    [hand[3], hand[2]] = [hand[2], hand[3]];
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 1 && cxcs2 == 2 && cxcs3 == 4 && cxcs4 == 5 && cxcs5 == 3){
    console.log("swap 3,4,5 > 4,5,3");
    [hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[2]];
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 1 && cxcs2 == 2 && cxcs3 == 5 && cxcs4 == 3 && cxcs5 == 4){
    console.log("swap 3,4,5 > 5,3,4");
    [hand[2], hand[3], hand[4]] = [hand[4], hand[2], hand[3]];
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 1 && cxcs2 == 2 && cxcs3 == 5 && cxcs4 == 4 && cxcs5 == 3){
    console.log("swap 3,5 > 5,3");
    [hand[2], hand[4]] = [hand[4], hand[2]];
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 1 && cxcs2 == 3 && cxcs3 == 2 && cxcs4 == 4 && cxcs5 == 5){
    console.log("swap 2,3 > 3,2");
    [hand[1], hand[2]] = [hand[2], hand [1]];
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 3 && cxcs3 == 2 && cxcs4 == 5 && cxcs5 == 4){
    console.log("swap 2,3,4,5 > 3,2,5,4");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[1], hand[4], hand[3]];
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 1 && cxcs2 == 3 && cxcs3 == 4 && cxcs4 == 2 && cxcs5 == 5){
    console.log("swap 2,3,4 > 3,4,2");
    [hand[1], hand[2], hand[3]] = [hand[2], hand[3], hand[1]];
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 1 && cxcs2 == 3 && cxcs3 == 4 && cxcs4 == 5 && cxcs5 == 2){
    console.log("swap 2,3,4,5 > 3,4,5,2");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[3], hand[4], hand[1]];
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 1 && cxcs2 == 3 && cxcs3 == 5 && cxcs4 == 2 && cxcs5 == 4){
    console.log("swap 2,3,4,5 > 3,5,2,4");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[1], hand[3]];
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 1 && cxcs2 == 3 && cxcs3 == 5 && cxcs4 == 4 && cxcs5 == 2){
    console.log("swap 2,3,5 > 3,5,2");
    [hand[1], hand[2], hand[4]] = [hand[2], hand[4], hand[1]];
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 1 && cxcs2 == 4 && cxcs3 == 2 && cxcs4 == 3 && cxcs5 == 5){
    console.log("swap 2,3,4 > 4,2,3");
    [hand[1], hand[2], hand[3]] = [hand[3], hand[1], hand[2]];
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 4 && cxcs3 == 2 && cxcs4 == 5 && cxcs5 == 3){
    console.log("swap 2,3,4,5 > 4,2,5,3");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[1], hand[4], hand[2]];
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 1 && cxcs2 == 4 && cxcs3 == 3 && cxcs4 == 2 && cxcs5 == 5){
    console.log("swap 2,4 > 4,2");
    [hand[1], hand[3]] = [hand[3], hand[1]];
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 4 && cxcs3 == 3 && cxcs4 == 5 && cxcs5 == 2){
    console.log("swap 2,4,5 > 4,5,2");
    [hand[1], hand[3], hand[4]] = [hand[3], hand[4], hand[1]];
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 1 && cxcs2 == 4 && cxcs3 == 5 && cxcs4 == 2 && cxcs5 == 3){
    console.log("swap 2,3,4,5 > 4,5,2,3");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[1], hand[2]];
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 1 && cxcs2 == 4 && cxcs3 == 5 && cxcs4 == 3 && cxcs5 == 2){
    console.log("swap 2,3,4,5 > 4,5,3,2");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[2], hand[1]];
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 1 && cxcs2 == 5 && cxcs3 == 2 && cxcs4 == 3 && cxcs5 == 4){
    console.log("swap 2,3,4,5 > 5,2,3,4");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[1], hand[2], hand[3]];
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 5 && cxcs3 == 2 && cxcs4 == 4 && cxcs5 == 3){
    console.log("swap 2,3,5 > 5,2,3");
    [hand[1], hand[2], hand[4]] = [hand[4], hand[1], hand[2]];
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 5 && cxcs3 == 3 && cxcs4 == 2 && cxcs5 == 4){
    console.log("swap 2,4,5 > 5,2,4");
    [hand[1], hand[3], hand[4]] = [hand[4], hand[1], hand[3]];
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 5 && cxcs3 == 3 && cxcs4 == 4 && cxcs5 == 2){
    console.log("swap 2,5 > 5,2");
    [hand[1], hand[4]] = [hand[4], hand[1]];
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 5 && cxcs3 == 4 && cxcs4 == 2 && cxcs5 == 3){
    console.log("swap 2,3,4,5 > 5,4,2,3");
    [hand[1], hand[2], hand[4], hand[4]] = [hand[4], hand[3], hand[1], hand[2]];
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 1 && cxcs2 == 5 && cxcs3 == 4 && cxcs4 == 3 && cxcs5 == 2){
    console.log("swap 2,3,4,5 > 5,4,3,2");
    [hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[2], hand[1]];
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    
    
    
    if(cxcs1 == 2 && cxcs2 == 1 && cxcs3 == 3 && cxcs4 == 4 && cxcs5 == 5){
    console.log("swap 1,2 > 2,1");
    [hand[0], hand[1]] = [hand[1], hand[0]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 2 && cxcs2 == 1 && cxcs3 == 3 && cxcs4 == 5 && cxcs5 == 4){
    console.log("swap 1,2,4,5 > 2,1,5,4");
    [hand[0], hand[1], hand[3], hand[4]] = [hand[1], hand[0], hand[4], hand[3]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 2 && cxcs2 == 1 && cxcs3 == 4 && cxcs4 == 3 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 2,1,4,3");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[1], hand[0], hand[3], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[2][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 2 && cxcs2 == 1 && cxcs3 == 4 && cxcs4 == 5 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 2,1,4,5,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[0], hand[3], hand[4], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 2 && cxcs2 == 1 && cxcs3 == 5 && cxcs4 == 3 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 2,1,5,3,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[0], hand[4], hand[2], hand[3]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 2 && cxcs2 == 1 && cxcs3 == 5 && cxcs4 == 4 && cxcs5 == 3){
    console.log("swap 1,2,3,5 > 2,1,5,3");
    [hand[0], hand[1], hand[2], hand[4]] = [hand[1], hand[0], hand[4], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 2 && cxcs2 == 3 && cxcs3 == 1 && cxcs4 == 4 && cxcs5 == 5){
    console.log("swap 1,2,3 > 2,3,1");
    [hand[0], hand[1], hand[2]] = [hand[1], hand[2], hand[0]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 3 && cxcs3 == 1 && cxcs4 == 5 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 2,3,1,5,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[2], hand[0], hand[4], hand[3]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 2 && cxcs2 == 3 && cxcs3 == 4 && cxcs4 == 1 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 2,3,4,1");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[1], hand[2], hand[3], hand[0]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 2 && cxcs2 == 3 && cxcs3 == 4 && cxcs4 == 5 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 2,3,4,5,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[2], hand[3], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 2 && cxcs2 == 3 && cxcs3 == 5 && cxcs4 == 1 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 2,3,5,1,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[2], hand[4], hand[0], hand[3]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 2 && cxcs2 == 3 && cxcs3 == 5 && cxcs4 == 4 && cxcs5 == 1){
    console.log("swap 1,2,3,5 > 2,3,5,1");
    [hand[0], hand[1], hand[2], hand[4]] = [hand[1], hand[2], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 2 && cxcs2 == 4 && cxcs3 == 1 && cxcs4 == 3 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 2,4,1,3");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[1], hand[3], hand[0], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 4 && cxcs3 == 1 && cxcs4 == 5 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 2,4,1,5,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[3], hand[0], hand[4], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 2 && cxcs2 == 4 && cxcs3 == 3 && cxcs4 == 1 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 2,4,3,1");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[1], hand[3], hand[2], hand[0]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 4 && cxcs3 == 3 && cxcs4 == 5 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 2,4,3,5,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[3], hand[2], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 2 && cxcs2 == 4 && cxcs3 == 5 && cxcs4 == 1 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 2,4,5,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[3], hand[4], hand[0], hand[2]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 2 && cxcs2 == 4 && cxcs3 == 5 && cxcs4 == 3 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 2,4,5,3,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[3], hand[4], hand[2], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 2 && cxcs2 == 5 && cxcs3 == 1 && cxcs4 == 3 && cxcs5 == 4){
    console.log("swap 1,2,3,4 > 2,5,1,3,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[4], hand[0], hand[2], hand[3]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 5 && cxcs3 == 1 && cxcs4 == 4 && cxcs5 == 3){
    console.log("swap 1,2,3,5 > 2,5,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[4], hand[0], hand[3], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 5 && cxcs3 == 3 && cxcs4 == 1 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 2,5,3,1,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[4], hand[2], hand[0], hand[3]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 5 && cxcs3 == 3 && cxcs4 == 4 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 2,5,3,4,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[4], hand[2], hand[3], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 5 && cxcs3 == 4 && cxcs4 == 1 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 2,5,4,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[4], hand[3], hand[0], hand[2]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 2 && cxcs2 == 5 && cxcs3 == 4 && cxcs4 == 3 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 2,5,4,3,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[4], hand[3], hand[2], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc3;
    }
    
    
    
    
    if(cxcs1 == 3 && cxcs2 == 1 && cxcs3 == 2 && cxcs4 == 4 && cxcs5 == 5){
    console.log("swap 1,2,3 > 3,1,2");
    [hand[0], hand[1], hand[2]] = [hand[2], hand[0], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 3 && cxcs2 == 1 && cxcs3 == 2 && cxcs4 == 5 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 3,1,2,5,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[0], hand[1], hand[4], hand[3]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 3 && cxcs2 == 1 && cxcs3 == 4 && cxcs4 == 2 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 3,1,4,2");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[2], hand[0], hand[3], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 3 && cxcs2 == 1 && cxcs3 == 4 && cxcs4 == 5 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 3,1,4,5,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[0], hand[3], hand[4], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 3 && cxcs2 == 1 && cxcs3 == 5 && cxcs4 == 2 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 3,1,5,2,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[0], hand[4], hand[1], hand[3]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 3 && cxcs2 == 1 && cxcs3 == 5 && cxcs4 == 4 && cxcs5 == 2){
    console.log("swap 1,2,3,5 > 3,1,5,2");
    [hand[0], hand[1], hand[2], hand[4]] = [hand[2], hand[0], hand[4], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 3 && cxcs2 == 2 && cxcs3 == 1 && cxcs4 == 4 && cxcs5 == 5){
    console.log("swap 1,2,3 > 3,2,1");
    [hand[0], hand[1], hand[2]] = [hand[2], hand[1], hand[0]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 3 && cxcs2 == 2 && cxcs3 == 1 && cxcs4 == 5 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 3,2,1,5,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[1], hand[0], hand[4], hand[3]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 3 && cxcs2 == 2 && cxcs3 == 4 && cxcs4 == 1 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 3,2,4,1");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[2], hand[1], hand[3], hand[0]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 3 && cxcs2 == 2 && cxcs3 == 4 && cxcs4 == 5 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 3,2,4,5,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[1], hand[3], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 3 && cxcs2 == 2 && cxcs3 == 5 && cxcs4 == 1 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 3,2,5,1,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[1], hand[4], hand[0], hand[3]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 3 && cxcs2 == 2 && cxcs3 == 5 && cxcs4 == 4 && cxcs5 == 1){
    console.log("swap 1,2,3,5 > 3,2,5,1");
    [hand[0], hand[1], hand[2], hand[4]] = [hand[2], hand[1], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 3 && cxcs2 == 4 && cxcs3 == 1 && cxcs4 == 2 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 3,4,1,2");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[2], hand[3], hand[0], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[3][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[0][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 4 && cxcs3 == 1 && cxcs4 == 5 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 3,4,1,5,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[3], hand[0], hand[4], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[4][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[0][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 3 && cxcs2 == 4 && cxcs3 == 2 && cxcs4 == 1 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 3,4,2,1");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[2], hand[3], hand[1], hand[0]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 4 && cxcs3 == 2 && cxcs4 == 5 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 3,4,2,5,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[3], hand[1], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 3 && cxcs2 == 4 && cxcs3 == 5 && cxcs4 == 1 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 3,4,5,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[3], hand[4], hand[0], hand[1]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 3 && cxcs2 == 4 && cxcs3 == 5 && cxcs4 == 2 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 3,4,5,2,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[3], hand[4], hand[1], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 3 && cxcs2 == 5 && cxcs3 == 1 && cxcs4 == 2 && cxcs5 == 4){
    console.log("swap 1,2,3,4 > 3,5,1,2,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[0], hand[1], hand[3]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 5 && cxcs3 == 1 && cxcs4 == 4 && cxcs5 == 2){
    console.log("swap 1,2,3,5 > 3,5,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[0], hand[3], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 5 && cxcs3 == 2 && cxcs4 == 1 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 3,5,2,1,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[1], hand[0], hand[3]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 5 && cxcs3 == 2 && cxcs4 == 4 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 3,5,2,4,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[1], hand[3], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 5 && cxcs3 == 4 && cxcs4 == 1 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 3,5,4,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[3], hand[0], hand[1]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 3 && cxcs2 == 5 && cxcs3 == 4 && cxcs4 == 2 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 3,5,4,2,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[2], hand[4], hand[3], hand[1], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc3;
    }
    
    
    
    
    if(cxcs1 == 4 && cxcs2 == 1 && cxcs3 == 2 && cxcs4 == 3 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 4,1,2,3");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[3], hand[0], hand[1], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 4 && cxcs2 == 1 && cxcs3 == 2 && cxcs4 == 5 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 4,1,2,5,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[0], hand[1], hand[4], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 4 && cxcs2 == 1 && cxcs3 == 3 && cxcs4 == 2 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 4,1,3,2");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[3], hand[0], hand[2], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 4 && cxcs2 == 1 && cxcs3 == 3 && cxcs4 == 5 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 4,1,3,5,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[0], hand[2], hand[4], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 4 && cxcs2 == 1 && cxcs3 == 5 && cxcs4 == 2 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 4,1,5,2,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[0], hand[4], hand[1], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 4 && cxcs2 == 1 && cxcs3 == 5 && cxcs4 == 3 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 4,1,5,3,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[1], hand[0], hand[4], hand[3], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 4 && cxcs2 == 2 && cxcs3 == 1 && cxcs4 == 3 && cxcs5 == 5){
    console.log("swap 1,3,4 > 4,1,3");
    [hand[0], hand[2], hand[3]] = [hand[3], hand[1], hand[0]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 4 && cxcs2 == 2 && cxcs3 == 1 && cxcs4 == 5 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 4,2,1,5,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[1], hand[0], hand[4], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 4 && cxcs2 == 2 && cxcs3 == 3 && cxcs4 == 1 && cxcs5 == 5){
    console.log("swap 1,4 > 4,1");
    [hand[0], hand[3]] = [hand[3], hand[0]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 4 && cxcs2 == 2 && cxcs3 == 3 && cxcs4 == 5 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 4,2,3,5,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[1], hand[2], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 4 && cxcs2 == 2 && cxcs3 == 5 && cxcs4 == 1 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 4,2,5,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[1], hand[4], hand[0], hand[2]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 4 && cxcs2 == 2 && cxcs3 == 5 && cxcs4 == 3 && cxcs5 == 1){
    console.log("swap 1,3,4,5 > 4,5,3,1");
    [hand[0], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[2], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 4 && cxcs2 == 3 && cxcs3 == 1 && cxcs4 == 2 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 4,3,1,2");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[3], hand[2], hand[0], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 4 && cxcs2 == 3 && cxcs3 == 1 && cxcs4 == 5 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 4,3,1,5,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[2], hand[0], hand[4], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 4 && cxcs2 == 3 && cxcs3 == 2 && cxcs4 == 1 && cxcs5 == 5){
    console.log("swap 1,2,3,4 > 4,3,2,1");
    [hand[0], hand[1], hand[2], hand[3]] = [hand[3], hand[2], hand[1], hand[0]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 4 && cxcs2 == 3 && cxcs3 == 2 && cxcs4 == 5 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 4,3,2,5,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[2], hand[1], hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    }
    if(cxcs1 == 4 && cxcs2 == 3 && cxcs3 == 5 && cxcs4 == 1 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 4,3,5,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[2], hand[4], hand[0], hand[1]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    if(cxcs1 == 4 && cxcs2 == 3 && cxcs3 == 5 && cxcs4 == 2 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 4,3,5,2,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[2], hand[4], hand[1], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    }
    
    if(cxcs1 == 4 && cxcs2 == 5 && cxcs3 == 1 && cxcs4 == 2 && cxcs5 == 3){
    console.log("swap 1,2,3,4 > 4,5,1,2,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[0], hand[1], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 4 && cxcs2 == 5 && cxcs3 == 1 && cxcs4 == 3 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 4,5,1,3,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[0], hand[2], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 4 && cxcs2 == 5 && cxcs3 == 2 && cxcs4 == 1 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 4,5,2,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[1], hand[0], hand[2]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 4 && cxcs2 == 5 && cxcs3 == 2 && cxcs4 == 3 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 4,5,2,3,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[1], hand[2], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 4 && cxcs2 == 5 && cxcs3 == 3 && cxcs4 == 1 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 4,5,3,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[2], hand[0], hand[1]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    if(cxcs1 == 4 && cxcs2 == 5 && cxcs3 == 3 && cxcs4 == 2 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 4,5,3,2,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[4], hand[2], hand[1], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    card5.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    }
    
    
    
    if(cxcs1 == 5 && cxcs2 == 1 && cxcs3 == 2 && cxcs4 == 3 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 5,1,2,3,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[3], hand[0], hand[1], hand[2], hand[3]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 1 && cxcs3 == 2 && cxcs4 == 4 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 5,1,2,4,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[0], hand[1], hand[3], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 1 && cxcs3 == 3 && cxcs4 == 2 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 5,1,3,2,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[0], hand[2], hand[1], hand[3]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 1 && cxcs3 == 3 && cxcs4 == 4 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 5,1,3,4,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[0], hand[2], hand[3], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 1 && cxcs3 == 4 && cxcs4 == 2 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 5,1,4,2,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[0], hand[3], hand[1], hand[2]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 1 && cxcs3 == 4 && cxcs4 == 3 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 5,1,4,3,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[0], hand[3], hand[2], hand[1]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    
    if(cxcs1 == 5 && cxcs2 == 2 && cxcs3 == 1 && cxcs4 == 3 && cxcs5 == 4){
    console.log("swap 1,3,4,5 > 5,1,3,4");
    [hand[0], hand[2], hand[3]] = [hand[2], hand[1], hand[0]];
    card1.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 2 && cxcs3 == 1 && cxcs4 == 4 && cxcs5 == 3){
    console.log("swap 1,3,4,5 > 5,1,4,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[1], hand[0], hand[3], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 2 && cxcs3 == 3 && cxcs4 == 1 && cxcs5 == 4){
    console.log("swap 1,4,5 > 5,1,4");
    [hand[0], hand[3], hand[4]] = [hand[4], hand[0], hand[3]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[4][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 2 && cxcs3 == 3 && cxcs4 == 4 && cxcs5 == 1){
    console.log("swap 1,5 > 5,1");
    [hand[0], hand[4]] = [hand[4], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 2 && cxcs3 == 4 && cxcs4 == 1 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 5,2,4,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[1], hand[3], hand[0], hand[2]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 2 && cxcs3 == 4 && cxcs4 == 3 && cxcs5 == 1){
    console.log("swap 1,3,4,5 > 5,4,3,1");
    [hand[0], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[2], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    
    if(cxcs1 == 5 && cxcs2 == 3 && cxcs3 == 1 && cxcs4 == 2 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 5,3,1,2,4");
    [hand[0], hand[1], hand[2], hand[3], hand[5]] = [hand[4], hand[2], hand[0], hand[1], hand[3]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 3 && cxcs3 == 1 && cxcs4 == 4 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 5,3,1,4,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[2], hand[0], hand[3], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 3 && cxcs3 == 2 && cxcs4 == 1 && cxcs5 == 4){
    console.log("swap 1,2,3,4,5 > 5,3,2,1,4");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[2], hand[1], hand[0], hand[3]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 3 && cxcs3 == 2 && cxcs4 == 4 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 5,3,2,4,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[2], hand[1], hand[3], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 3 && cxcs3 == 4 && cxcs4 == 1 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 5,3,4,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[2], hand[3], hand[0], hand[1]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 3 && cxcs3 == 4 && cxcs4 == 2 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 5,3,4,2,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[2], hand[3], hand[1], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card4.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    
    if(cxcs1 == 5 && cxcs2 == 4 && cxcs3 == 1 && cxcs4 == 2 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 5,4,1,2,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[0], hand[1], hand[2]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 4 && cxcs3 == 1 && cxcs4 == 3 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 5,4,1,3,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[0], hand[2], hand[1]];
    card1.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 4 && cxcs3 == 2 && cxcs4 == 1 && cxcs5 == 3){
    console.log("swap 1,2,3,4,5 > 5,4,2,1,3");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[1], hand[0], hand[2]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 4 && cxcs3 == 2 && cxcs4 == 3 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 5,4,2,3,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[1], hand[2], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card3.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 4 && cxcs3 == 3 && cxcs4 == 1 && cxcs5 == 2){
    console.log("swap 1,2,3,4,5 > 5,4,3,1,2");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[2], hand[0], hand[1]];
    card1.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card2.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    if(cxcs1 == 5 && cxcs2 == 4 && cxcs3 == 3 && cxcs4 == 2 && cxcs5 == 1){
    console.log("swap 1,2,3,4,5 > 5,4,3,2,1");
    [hand[0], hand[1], hand[2], hand[3], hand[4]] = [hand[4], hand[3], hand[2], hand[1], hand[0]];
    card1.innerHTML = hand[4][0] + "<br>" + hand[4][1] + "<br>" +  cardDesc5;
    card2.innerHTML = hand[3][0] + "<br>" + hand[3][1] + "<br>" +  cardDesc4;
    card3.innerHTML = hand[2][0] + "<br>" + hand[2][1] + "<br>" +  cardDesc3;
    card4.innerHTML = hand[1][0] + "<br>" + hand[1][1] + "<br>" +  cardDesc2;
    card5.innerHTML = hand[0][0] + "<br>" + hand[0][1] + "<br>" +  cardDesc1;
    }
    //}
    
    }
//{Battle Start
function startBattle(){
enemyDamageMod = 1+(depth*.08);
enemyBlockMod = 1+(depth*.08);
enemyHpMod = 1+(depth*.08);

enemyDamage = Math.floor(25*enemyDamageMod);
enemyBlock = Math.floor(20*enemyBlockMod);
enemyHP = Math.floor(250*enemyHPMod);

battleGoing = true;
startTurn();
}
startBattle();
//}
//{Game Tick
function tick(){
if (isMouseD1){
card1.style.top = (cy-(card1.offsetHeight/2)) + "px";
card1.style.left = (cx-(card1.offsetWidth/2)) + "px";
}
if (isMouseD2){
card2.style.top = (cy-(card2.offsetHeight/2)) + "px";
card2.style.left = (cx-(card2.offsetWidth/2)) + "px";
}
if (isMouseD3){
card3.style.top = (cy-(card3.offsetHeight/2)) + "px";
card3.style.left = (cx-(card3.offsetWidth/2)) + "px";
}
if (isMouseD4){
card4.style.top = (cy-(card4.offsetHeight/2)) + "px";
card4.style.left = (cx-(card4.offsetWidth/2)) + "px";
}
if (isMouseD5){
card5.style.top = (cy-(card5.offsetHeight/2)) + "px";
card5.style.left = (cx-(card5.offsetWidth/2)) + "px";
console.log(isMouseD5);
}

if ((cx >= cardS1Loc.left) && (cx <= cardS1Loc.right) && (cy <= cardS1Loc.bottom) && (cy >= cardS1Loc.top)){
  isMouseO1=true;
  isMouseO2=false;
  isMouseO3=false;
  isMouseO4=false;
  isMouseO5=false;
}
else if ((cx >= cardS2Loc.left) && (cx <= cardS2Loc.right) && (cy <= cardS2Loc.bottom) && (cy >= cardS2Loc.top)){
  isMouseO1=false;
  isMouseO2=true;
  isMouseO3=false;
  isMouseO4=false;
  isMouseO5=false;
}
else if ((cx >= cardS3Loc.left) && (cx <= cardS3Loc.right) && (cy <= cardS3Loc.bottom) && (cy >= cardS3Loc.top)){
  isMouseO1=false;
  isMouseO2=false;
  isMouseO3=true;
  isMouseO4=false;
  isMouseO5=false;
}
else if ((cx >= cardS4Loc.left) && (cx <= cardS4Loc.right) && (cy <= cardS4Loc.bottom) && (cy >= cardS4Loc.top)){
  isMouseO1=false;
  isMouseO2=false;
  isMouseO3=false;
  isMouseO4=true;
  isMouseO5=false;
}
else if ((cx >= cardS5Loc.left) && (cx <= cardS5Loc.right) && (cy <= cardS5Loc.bottom) && (cy >= cardS5Loc.top)){
  isMouseO1=false;
  isMouseO2=false;
  isMouseO3=false;
  isMouseO4=false;
  isMouseO5=true;
}
else{
  isMouseO1=false;
  isMouseO2=false;
  isMouseO3=false;
  isMouseO4=false;
  isMouseO5=false;
}
checkHand();
reexamine();
}
//}
//{Basic Reward

    function basicReward(){
    
    popup.style.visibility = "visible";
    
    rcard1.style.visibility = "visible";
    rcard2.style.visibility = "visible";
    rcard3.style.visibility = "visible";
    reward = 0;
    
    damage1 = 0;
    basedamage1 = 0;
    damage2 = 0;
    basedamage2 = 0;
    damage3 = 0;
    basedamage3 = 0;
    damage4 = 0;
    basedamage4 = 0;
    damage5 = 0;
    basedamage5 = 0;

    block1 = 0;
    baseblock1 = 0;
    block2 = 0;
    baseblock2 = 0;
    block3 = 0;
    baseblock3 = 0;
    block4 = 0;
    baseblock4 = 0;
    block5 = 0;
    baseblock5 = 0;

    strength = 0;
    strength1 = 0;
    strength2 = 0;
    strength3 = 0;
    strength4 = 0;
    strength5 = 0;

    tstrength1 = 0;
    tstrength2 = 0;
    tstrength3 = 0;
    tstrength4 = 0;
    tstrength5 = 0;

    fortification = 0;
    fortification1 = 0;
    fortification2 = 0;
    fortification3 = 0;
    fortification4 = 0;
    fortification5 = 0;

    tfortification1 = 0;
    tfortification2 = 0;
    tfortification3 = 0;
    tfortification4 = 0;
    tfortification5 = 0;
    
    
    tpossibleCards = JSON.parse(JSON.stringify(possibleCards));
    i = 0;
    grabNum = Math.floor(Math.random()*tpossibleCards.length);
    while (i < 3){
    rewardCard1[i] = tpossibleCards[grabNum][i];
    i+=1;
    }
    tpossibleCards.splice(grabNum,1);
    i = 0;
    
    grabNum = Math.floor(Math.random()*tpossibleCards.length);
    while (i < 3){
    rewardCard2[i] = tpossibleCards[grabNum][i];
    i+=1;
    }
    tpossibleCards.splice(grabNum,1);
    i = 0;
    
    grabNum = Math.floor(Math.random()*tpossibleCards.length);
    while (i < 3){
    rewardCard3[i] = tpossibleCards[grabNum][i];
    i+=1;
    }
    tpossibleCards.splice(grabNum,1);
    i = 0;

    effArrArr = rewardCard1[2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage1 = (effTimes[0]*1);
    damage1 = (basedamage1*effTimes[1]*1);
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock1 = (effTimes[0]*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength1 = effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification1 = effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength1 = effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification1 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    rcardDesc1 ="";
    if(basedamage1 > 0){
    rcardDesc1 = rcardDesc1.concat("Deal: ",basedamage1,"*",effTimes[1]," damage <br>");
    }
    if(baseblock1 > 0){
    rcardDesc1 = rcardDesc1.concat("Gain: ",baseblock1," block <br>");
    }
    if(tstrength1 > 0){
    rcardDesc1 = rcardDesc1.concat("Further Cells deal: ",tstrength1," more damage <br>");
    }
    if(tfortification1 > 0){
    rcardDesc1 = rcardDesc1.concat("Further Cells gain: ",tfortification1," more block <br>");
    }
    if(strength1 > 0){
    rcardDesc1 = rcardDesc1.concat("Gain: ",strength1," Strength <br>");
    }
    if(strength1 < 0){
    rcardDesc1 = rcardDesc1.concat("Lose: ",-strength1," Strength <br>");
    }
    if(fortification1 > 0){
    rcardDesc1 = rcardDesc1.concat("Gain: ",fortification1," Fortification <br>");
    }
    if(fortification1 < 0){
    rcardDesc1 = rcardDesc1.concat("Lose: ",-fortification1," Fortification <br>");
    }
    
    effArrArr = rewardCard2[2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage2 = (effTimes[0]*1);
    damage2 = (basedamage2*effTimes[1]*1);
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock2 = (effTimes[0]*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength2 = effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification2 = effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength2 = effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification2 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    rcardDesc2 ="";
    if(basedamage2 > 0){
    rcardDesc2 = rcardDesc2.concat("Deal: ",basedamage2,"*",effTimes[1]," damage <br>");
    }
    if(baseblock2 > 0){
    rcardDesc2 = rcardDesc2.concat("Gain: ",baseblock2," block <br>");
    }
    if(tstrength2 > 0){
    rcardDesc2 = rcardDesc2.concat("Further Cells deal: ",tstrength2," more damage <br>");
    }
    if(tfortification2 > 0){
    rcardDesc2 = rcardDesc2.concat("Further Cells gain: ",tfortification2," more block <br>");
    }
    if(strength2 > 0){
    rcardDesc2 = rcardDesc2.concat("Gain: ",strength2," Strength <br>");
    }
    if(strength2 < 0){
    rcardDesc2 = rcardDesc2.concat("Lose: ",-strength2," Strength <br>");
    }
    if(fortification2 > 0){
    rcardDesc2 = rcardDesc2.concat("Gain: ",fortification2," Fortification <br>");
    }
    if(fortification2 < 0){
    rcardDesc2 = rcardDesc2.concat("Lose: ",-fortification2," Fortification <br>");
    }
    
    effArrArr = rewardCard3[2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage3 = (effTimes[0]*1);
    damage3 = (basedamage1*effTimes[1]*1);
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock3 = (effTimes[0]*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength3 = effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification3 = effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength3 = effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification3 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    rcardDesc3 ="";
    if(basedamage3 > 0){
    rcardDesc3 = rcardDesc3.concat("Deal: ",basedamage3,"*",effTimes[1]," damage <br>");
    }
    if(baseblock3 > 0){
    rcardDesc3 = rcardDesc3.concat("Gain: ",baseblock3," block <br>");
    }
    if(tstrength3 > 0){
    rcardDesc3 = rcardDesc3.concat("Further Cells deal: ",tstrength3," more damage <br>");
    }
    if(tfortification3 > 0){
    rcardDesc3 = rcardDesc3.concat("Further Cells gain: ",tfortification3," more block <br>");
    }
    if(strength3 > 0){
    rcardDesc3 = rcardDesc3.concat("Gain: ",strength3," Strength <br>");
    }
    if(strength3 < 0){
    rcardDesc3 = rcardDesc3.concat("Lose: ",-strength3," Strength <br>");
    }
    if(fortification3 > 0){
    rcardDesc3 = rcardDesc3.concat("Gain: ",fortification3," Fortification <br>");
    }
    if(fortification3 < 0){
    rcardDesc3 = rcardDesc3.concat("Lose: ",-fortification3," Fortification <br>");
    }
    
    console.log(rcardDesc3);
    rcard1.innerHTML = rewardCard1[0] + "<br>" + rewardCard1[1] + "<br>" +  rcardDesc1;
    rcard2.innerHTML = rewardCard2[0] + "<br>" + rewardCard2[1] + "<br>" +  rcardDesc2;
    rcard3.innerHTML = rewardCard3[0] + "<br>" + rewardCard3[1] + "<br>" +  rcardDesc3;
    }
    
    
    
    
    function setReward1(){
    deck.push(JSON.parse(JSON.stringify(rewardCard1)));
    deckNumber.innerHTML = deck.length;
    combatTurn = 1;
    popup.style.visibility = "hidden";
    rcard1.style.visibility = "hidden";
    rcard2.style.visibility = "hidden";
    rcard3.style.visibility = "hidden";
    nextDepth();
    }
    
    function setReward2(){
    deck.push(JSON.parse(JSON.stringify(rewardCard2)));
    deckNumber.innerHTML = deck.length;
    combatTurn = 1;
    popup.style.visibility = "hidden";
    rcard1.style.visibility = "hidden";
    rcard2.style.visibility = "hidden";
    rcard3.style.visibility = "hidden";
    nextDepth();
    }
    
    function setReward3(){
    deck.push(JSON.parse(JSON.stringify(rewardCard3)));
    deckNumber.innerHTML = deck.length;
    combatTurn = 1;
    popup.style.visibility = "hidden";
    rcard1.style.visibility = "hidden";
    rcard2.style.visibility = "hidden";
    rcard3.style.visibility = "hidden";
    nextDepth();
    }

//}
//{Descend

function nextDepth(){
    
depth += 1;
startBattle();
    
}

//}
//{Prepare Start
topBar.width = screen.width;
topBar.style.left = 0;
closePopup.style.height = screen.height/20 + "px";
closePopup.style.width = closePopup.style.height;
deckNumber.innerHTML = deck.length;
var vert = closePopup.getBoundingClientRect();
//closePopup.style.bottom = 85-((vert.height/screen.height)*50) + "%";
closePopup.style.right = 15-((vert.width/screen.width)*50) + "%";
//card1.style.left = (Math.round(cardS1Loc.left)) + "px";
//card2.style.left = (Math.round(cardS2Loc.left)) + "px";
//card3.style.left = (Math.round(cardS3Loc.left)) + "px";
//card4.style.left = (Math.round(cardS4Loc.left)) + "px";
//card5.style.left = (Math.round(cardS5Loc.left)) + "px";
var tick = setInterval(tick,10);
function showDeck(){
popup.innerHTML = "";
popup.style.visibility = "visible";
closePopup.style.visibility = "visible";
i = 0;
var e1;
while (i < deck.length){
e1 = document.createElement("SPAN");
    basedamage1=0;
    baseblock1=0;
    tstrength1=0;
    tfortification1=0;
    strength1=0;
    fortification1=0;
    effArrArr = deck[i][2].split(",");
    while (effArrArr.length > 0){
    effArr = effArrArr[0].split(":");
    if (effArr[0] == "Damage"){
    effTimes = effArr[1].split("x");
    basedamage1 = (effTimes[0]*1);
    damage1 = (basedamage1*effTimes[1]*1);
    }
    if (effArr[0] == "Block"){
    effTimes = effArr[1].split("x");
    baseblock1 = (effTimes[0]*1)*effTimes[1]; 
    }
    if (effArr[0] == "AfterDamage"){
    tstrength1 = effArr[1]; 
    }
    if (effArr[0] == "AfterBlock"){
    tfortification1 = effArr[1]; 
    }
    if (effArr[0] == "Strength"){
    strength1 = effArr[1];
    }
    if (effArr[0] == "Fortify"){
    fortification1 = effArr[1];
    }
    effArrArr.splice(0,1);
    }
    rcardDesc1 = "";
    if(basedamage1 > 0){
    rcardDesc1 = rcardDesc1.concat("Deal: ",basedamage1,"*",effTimes[1]," damage <br>");
    }
    if(baseblock1 > 0){
    rcardDesc1 = rcardDesc1.concat("Gain: ",baseblock1," block <br>");
    }
    if(tstrength1 > 0){
    rcardDesc1 = rcardDesc1.concat("Further Cells deal: ",tstrength1," more damage <br>");
    }
    if(tfortification1 > 0){
    rcardDesc1 = rcardDesc1.concat("Further Cells gain: ",tfortification1," more block <br>");
    }
    if(strength1 > 0){
    rcardDesc1 = rcardDesc1.concat("Gain: ",strength1," Strength <br>");
    }
    if(strength1 < 0){
    rcardDesc1 = rcardDesc1.concat("Lose: ",-strength1," Strength <br>");
    }
    if(fortification1 > 0){
    rcardDesc1 = rcardDesc1.concat("Gain: ",fortification1," Fortification <br>");
    }
    if(fortification1 < 0){
    rcardDesc1 = rcardDesc1.concat("Lose: ",-fortification1," Fortification <br>");
    }
e1.innerHTML = deck[i][0] + "<br>" + deck[i][1] + "<br>" +  rcardDesc1;
e1.className = "deck";
popup.appendChild(e1);
i+=1;
}
}

function closePopupF(){
    
popup.innerHTML = "";
popup.style.visibility = "hidden";
closePopup.style.visibility = "hidden";

}

showDeck();
//}