
//{Control Tabs  
  function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
  }
//}
//{Initilize Variables
var counter = ExpantaNum(10);
var gain = ExpantaNum(0);

var gen1 = 0;
var gen1Pd = ExpantaNum(0);
var gen1Tot = ExpantaNum(0);
var gen1Mult = ExpantaNum(1);

var gen2 = 0;
var gen2Pd = ExpantaNum(0);
var gen2Tot = ExpantaNum(0);
var gen2Mult = ExpantaNum(1);

var gen3 = 0;
var gen3Pd = ExpantaNum(0);
var gen3Tot = ExpantaNum(0);
var gen3Mult = ExpantaNum(1);

var gen4 = 0;
var gen4Pd = ExpantaNum(0);
var gen4Tot = ExpantaNum(0);
var gen4Mult = ExpantaNum(1);

var gen5 = 0;
var gen5Pd = ExpantaNum(0);
var gen5Tot = ExpantaNum(0);
var gen5Mult = ExpantaNum(1);

var gen6 = 0;
var gen6Pd = ExpantaNum(0);
var gen6Tot = ExpantaNum(0);
var gen6Mult = ExpantaNum(1);

var gen7 = 0;
var gen7Pd = ExpantaNum(0);
var gen7Tot = ExpantaNum(0);
var gen7Mult = ExpantaNum(1);

var gen8 = 0;
var gen8Pd = ExpantaNum(0);
var gen8Tot = ExpantaNum(0);
var gen8Mult = ExpantaNum(1);

var gen9 = 0;
var gen9Pd = ExpantaNum(0);
var gen9Tot = ExpantaNum(0);
var gen9Mult = ExpantaNum(1);

var gen1Cost = ExpantaNum(10);
var gen2Cost = ExpantaNum(1000);
var gen3Cost = ExpantaNum(100000);
var gen4Cost = ExpantaNum(100000000);
var gen5Cost = ExpantaNum(10000000000);
var gen6Cost = ExpantaNum(1000000000000);
var gen7Cost = ExpantaNum(100000000000000);
var gen8Cost = ExpantaNum(10000000000000000);
var gen9Cost = ExpantaNum(1000000000000000000);

var prowessAmt = ExpantaNum(0);
var prowessEff1 = ExpantaNum(1);
var prowessEff2 = ExpantaNum(1);

var vitalityAmt = ExpantaNum(0);
var vitalityEff1 = ExpantaNum(0);
var vitalityEff2 = ExpantaNum(1);

var dexterityAmt = ExpantaNum(0);
var dexterityEff1 = ExpantaNum(0);
var dexterityEff2 = ExpantaNum(1);

var charismaAmt = ExpantaNum(0);
var charismaEff1 = ExpantaNum(1);
var charismaEff2 = ExpantaNum(1);

var willAmt = ExpantaNum(0);
var willEff1 = ExpantaNum(0);
var willEff2 = ExpantaNum(1);

var greedAmt = ExpantaNum(0);
var greedEff1 = ExpantaNum(1);

var attChoice = 0;

var goldChaliceAmt = 0;
var goldChaliceCost = 1;
var goldChaliceEff1 = ExpantaNum(1);

var holySwordAmt = 0;
var holySwordCost = 1;
var holySwordEff1 = 1;
var holySwordEff2 = 0;

var earthShieldAmt = 0;
var earthShieldCost = 1;
var earthShieldEff1 = 1;
var earthShieldEff2 = 0;

var wingBootsAmt = 0;
var wingBootsCost = 1;
var wingBootsEff1 = 1;
var wingBootsEff2 = 0;

var fairyAmuletAmt = 0;
var fairyAmuletCost = 1;
var fairyAmuletEff1 = 1;
var fairyAmuletEff2 = 0;

var curseGrimoreAmt = 0;
var curseGrimoreCost = 1;
var curseGrimoreEff1 = 1;
var curseGrimoreEff2 = 0;

var dragonScaleAmt = 0;
var dragonScaleCost = 2;
var dragonScaleEff1 = 1;
var dragonScaleEff2 = 0;

var artifactShard = 0;
var artifactReset = 2;
var artifactResetAmt = 0;

var milestone10True = false;
//}
//{Save Game
function saving(){
	
localStorage.setItem("scounter",counter);
localStorage.setItem("sgain",gain);

localStorage.setItem("sgen1",gen1);
localStorage.setItem("sgen1Pd",gen1Pd);

localStorage.setItem("sgen2",gen2);
localStorage.setItem("sgen2Pd",gen2Pd);

localStorage.setItem("sgen3",gen3);
localStorage.setItem("sgen3Pd",gen3Pd);

localStorage.setItem("sgen4",gen4);
localStorage.setItem("sgen4Pd",gen4Pd);

localStorage.setItem("sgen5",gen5);
localStorage.setItem("sgen5Pd",gen5Pd);

localStorage.setItem("sgen6",gen6);
localStorage.setItem("sgen6Pd",gen6Pd);

localStorage.setItem("sgen7",gen7);
localStorage.setItem("sgen7Pd",gen7Pd);

localStorage.setItem("sgen8",gen8);
localStorage.setItem("sgen8Pd",gen8Pd);

localStorage.setItem("sgen9",gen9);
localStorage.setItem("sgen9Pd",gen9Pd);

localStorage.setItem("sprowessAmt",prowessAmt);

localStorage.setItem("svitalityAmt",vitalityAmt);

localStorage.setItem("sdexterityAmt",dexterityAmt);

localStorage.setItem("scharismaAmt",charismaAmt);

localStorage.setItem("swillAmt",willAmt);

localStorage.setItem("sgreedAmt",greedAmt);

localStorage.setItem("sgoldChaliceAmt",goldChaliceAmt);

localStorage.setItem("searthShieldAmt",earthShieldAmt);

localStorage.setItem("swingBootsAmt",wingBootsAmt);

localStorage.setItem("sfairyAmuletAmt",fairyAmuletAmt);

localStorage.setItem("scurseGrimoreAmt",curseGrimoreAmt);

localStorage.setItem("sdragonScaleAmt",dragonScaleAmt);

localStorage.setItem("sartifactShard",artifactShard);

localStorage.setItem("sartifactResetAmt",artifactResetAmt);
}
//}
//{Load Game
var fix1=0, fix2=0, fix3=0, fix4=0, fix5=0, fix6=0, fix7=0, fix8=0, fix9=0, fix11=0, fix21=0, fix31=0, fix41=0, fix51=0, fix61=0;

function loading(){
//counter=ExpantaNum.fromString(localStorage.getItem("scounter"));
counter=localStorage.getItem("scounter");
gain=localStorage.getItem("sgain");

fix1=localStorage.getItem("sgen1");
gen1=Number(fix1);
gen1Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen1Pd"));

fix2=localStorage.getItem("sgen2");
gen2=Number(fix2);
gen2Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen2Pd"));

fix3=localStorage.getItem("sgen3");
gen3=Number(fix3);
gen3Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen3Pd"));

fix4=localStorage.getItem("sgen4");
gen4=Number(fix4);
gen4Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen4Pd"));

fix5=localStorage.getItem("sgen5");
gen5=Number(fix5);
gen5Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen5Pd"));

fix6=localStorage.getItem("sgen6");
gen6=Number(fix6);
gen6Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen6Pd"));

fix7=localStorage.getItem("sgen7");
gen7=Number(fix7);
gen7Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen7Pd"));

fix8=localStorage.getItem("sgen8");
gen8=Number(fix8);
gen8Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen8Pd"));

fix9=localStorage.getItem("sgen9");
gen9=Number(fix9);
gen9Pd=/*ExpantaNum.fromString*/(localStorage.getItem("sgen9Pd"));

fix11=localStorage.getItem("sprowessAmt");
prowessAmt=Number(fix11);

fix21=localStorage.getItem("svitalityAmt");
vitalityAmt=Number(fix21);

fix31=localStorage.getItem("sdexterityAmt");
dexterityAmt=Number(fix31);

fix41=localStorage.getItem("scharismaAmt");
charismaAmt=Number(fix41);

fix51=localStorage.getItem("swillAmt");
willAmt=Number(fix51);

fix61=localStorage.getItem("sgreedAmt");
greedAmt=Number(fix61);

goldChaliceAmt=Number(localStorage.getItem("sgoldChaliceAmt"));

earthShieldAmt=Number(localStorage.getItem("searthShieldAmt"));

wingBootsAmt=Number(localStorage.getItem("swingBootsAmt"));

fairyAmuletAmt=Number(localStorage.getItem("sfairyAmuletAmt"));

curseGrimoreAmt=Number(localStorage.getItem("scurseGrimoreAmt"));

dragonScaleAmt=Number(localStorage.getItem("sdragonScaleAmt"));

artifactShard=Number(localStorage.getItem("sartifactShard"));

artifactResetAmt=Number(localStorage.getItem("sartifactResetAmt"));
}
start0();
loading();
//}
//{Game Tick
function incrementer(){
  calculateArtifact();
  calculateCost();
  calculateGain();
  calculateAtt();
  artifactMilestones();
  saving();
  counter = ExpantaNum.add(counter,gain);
  if(ExpantaNum.gte(counter,1000000)) {  document.getElementById("btn").innerHTML = counter.toExponential(2).toString();}
  else
  document.getElementById("btn").innerHTML = Math.trunc(counter).toString();
  if(ExpantaNum.gte(gain,1000000)) {  document.getElementById("btn2").innerHTML = gain.toExponential(2).toString();}
  else{
  document.getElementById("btn2").innerHTML = Math.trunc(gain*10).toString();}
  if((ExpantaNum.gte(counter,1e30)) && (document.getElementById("unlock1").style.visibility = "hidden")){
  document.getElementById("unlock1").style.visibility = "visible";}
  if((ExpantaNum.gte(counter,1e100)) && (document.getElementById("unlock2").style.visibility = "hidden")){
  document.getElementById("unlock2").style.visibility = "visible";
  document.getElementById("unlock2a").style.visibility = "visible";}
}
setInterval(incrementer, 100);
openTab(event, 'Collect');
//}
//{Buy Relics
function buyGoldChalice(){
  if(artifactShard>=goldChaliceCost){
  artifactShard-=goldChaliceCost;
  goldChaliceAmt+=1;
  calculateArtifact();}
}
function buyHolySword(){
  if(artifactShard>=holySwordCost){
  artifactShard-=holySwordCost;
  holySwordAmt+=1;
  calculateArtifact();}
}
function buyEarthenShield(){
  if(artifactShard>=earthShieldCost){
  artifactShard-=earthShieldCost;
  earthShieldAmt+=1;
  calculateArtifact();}
}
function buyWingBoots(){
  if(artifactShard>=wingBootsCost){
  artifactShard-=wingBootsCost;
  wingBootsAmt+=1;
  calculateArtifact();}
}
function buyFairyAmulet(){
  if(artifactShard>=fairyAmuletCost){
  artifactShard-=fairyAmuletCost;
  fairyAmuletAmt+=1;
  calculateArtifact();}
}
function buyCursedGrimore(){
  if(artifactShard>=curseGrimoreCost){
  artifactShard-=curseGrimoreCost;
  curseGrimoreAmt+=1;
  calculateArtifact();}
}
function buyDragonScales(){
  if(artifactShard>=dragonScaleCost){
  artifactShard-=dragonScaleCost;
  dragonScaleAmt+=1;
  calculateArtifact();}
}
//}
//{Relic Reset
function start1(){
artifactResetAmt += 1;	
	
counter = 10;
gain = 0;

gen1 = 0;
gen1Pd = 0;
gen1Tot = 0;
gen1Mult = 1;

gen2 = 0;
gen2Pd = 0;
gen2Tot = 0;
gen2Mult = 1;

gen3 = 0;
gen3Pd = 0;
gen3Tot = 0;
gen3Mult = 1;

gen4 = 0;
gen4Pd = 0;
gen4Tot = 0;
gen4Mult = 1;

gen5 = 0;
gen5Pd = 0;
gen5Tot = 0;
gen5Mult = 1;

gen6 = 0;
gen6Pd = 0;
gen6Tot = 0;
gen6Mult = 1;

gen7 = 0;
gen7Pd = 0;
gen7Tot = 0;
gen7Mult = 1;

gen8 = 0;
gen8Pd = 0;
gen8Tot = 0;
gen8Mult = 1;

gen9 = 0;
gen9Pd = 0;
gen9Tot = 0;
gen9Mult = 1;

gen1Cost = 10;
gen2Cost = 1000;
gen3Cost = 100000;
gen4Cost = 100000000;
gen5Cost = 10000000000;
gen6Cost = 1000000000000;
gen7Cost = 100000000000000;
gen8Cost = 10000000000000000;
gen9Cost = 1000000000000000000;

prowessAmt = 0;
prowessEff1 = 1;
prowessEff2 = 1;

vitalityAmt = 0;
vitalityEff1 = 0;
vitalityEff2 = 1;

dexterityAmt = 0;
dexterityEff1 = 0;
dexterityEff2 = 1;

charismaAmt = 0;
charismaEff1 = 1;
charismaEff2 = 1;

willAmt = 0;
willEff1 = 0;
willEff2 = 1;

greedAmt = 0;
greedEff1 = 1;

attChoice = 0;}
//}
//{Total Reset
function start0(){
counter = 10e100;
gain = 0;

gen1 = 0;
gen1Pd = 0;
gen1Tot = 0;
gen1Mult = 1;

gen2 = 0;
gen2Pd = 0;
gen2Tot = 0;
gen2Mult = 1;

gen3 = 0;
gen3Pd = 0;
gen3Tot = 0;
gen3Mult = 1;

gen4 = 0;
gen4Pd = 0;
gen4Tot = 0;
gen4Mult = 1;

gen5 = 0;
gen5Pd = 0;
gen5Tot = 0;
gen5Mult = 1;

gen6 = 0;
gen6Pd = 0;
gen6Tot = 0;
gen6Mult = 1;

gen7 = 0;
gen7Pd = 0;
gen7Tot = 0;
gen7Mult = 1;

gen8 = 0;
gen8Pd = 0;
gen8Tot = 0;
gen8Mult = 1;

gen9 = 0;
gen9Pd = 0;
gen9Tot = 0;
gen9Mult = 1;

gen1Cost = 10;
gen2Cost = 1000;
gen3Cost = 100000;
gen4Cost = 100000000;
gen5Cost = 10000000000;
gen6Cost = 1000000000000;
gen7Cost = 100000000000000;
gen8Cost = 10000000000000000;
gen9Cost = 1000000000000000000;

prowessAmt = 0;
prowessEff1 = 1;
prowessEff2 = 1;

vitalityAmt = 0;
vitalityEff1 = 0;
vitalityEff2 = 1;

dexterityAmt = 0;
dexterityEff1 = 0;
dexterityEff2 = 1;

charismaAmt = 0;
charismaEff1 = 1;
charismaEff2 = 1;

willAmt = 0;
willEff1 = 0;
willEff2 = 1;

greedAmt = 0;
greedEff1 = 1;

attChoice = 0;

goldChaliceAmt = 0;
goldChaliceCost = 1;
goldChaliceEff1 = 1;

holySwordAmt = 0;
holySwordCost = 1;
holySwordEff1 = 1;
holySwordEff2 = 0;

earthShieldAmt = 0;
earthShieldCost = 1;
earthShieldEff1 = 1;
earthShieldEff2 = 0;

wingBootsAmt = 0;
wingBootsCost = 1;
wingBootsEff1 = 1;
wingBootsEff2 = 0;

fairyAmuletAmt = 0;
fairyAmuletCost = 1;
fairyAmuletEff1 = 1;
fairyAmuletEff2 = 0;

curseGrimoreAmt = 0;
curseGrimoreCost = 1;
curseGrimoreEff1 = 1;
curseGrimoreEff2 = 0;

dragonScaleAmt = 0;
dragonScaleCost = 2;
dragonScaleEff1 = 1;
dragonScaleEff2 = 0;

artifactShard = 1e80;
artifactReset = 2;
artifactResetAmt = 0;
}
//}
//{Relic Calculations
function calculateArtifact(){
  artifactReset = Math.max(ExpantaNum.log(counter)/ExpantaNum.log(1e20)-3,0);
  document.getElementById("artifactReset").innerHTML = "Reset all previous progress for: " + Math.trunc(artifactReset).toString(); + " Artifact Shards";
  document.getElementById("artifactAmt").innerHTML = "You have: " + Math.trunc(artifactShard).toString() + " Artifact Shards";
  goldChaliceCost=Math.pow(Math.pow(3,goldChaliceAmt),.5).toFixed(0);
  document.getElementById("buyGoldChalice").innerHTML = goldChaliceCost.toString() + " Shards";
  goldChaliceEff1=(ExpantaNum.pow(1000,goldChaliceAmt));
  document.getElementById("goldChalice").innerHTML = "Multiply Treasure gain by: " + goldChaliceEff1.toString() + "x<br>Next: " + ExpantaNum.mul(goldChaliceEff1,1000).toString() + "x";
  holySwordCost=Math.pow(3,holySwordAmt);
  document.getElementById("buyHolySword").innerHTML = holySwordCost.toString() + " Shards";
  holySwordEff1=Math.pow(3,holySwordAmt);
  holySwordEff2=.2*holySwordAmt;
  document.getElementById("holySword").innerHTML = "Multiply Prowess gain by: " + holySwordEff1.toString() + "x, and increase Prowess's First Effect by: " + holySwordEff2.toFixed(1).toString() + "<br>Next: " + (holySwordEff1*3).toString() + "x, and +" + (holySwordEff2+.2).toFixed(1).toString();
  earthShieldCost=Math.pow(3,earthShieldAmt);
  document.getElementById("buyEarthenShield").innerHTML = earthShieldCost.toString() + " Shards";
  earthShieldEff1=Math.pow(3,earthShieldAmt);
  earthShieldEff2=(earthShieldAmt/(earthShieldAmt+7))+1;
  document.getElementById("earthShield").innerHTML = "Multiply Vitality gain by: " + earthShieldEff1.toString() + "x, and increase Vitality's First Effect by: " + (earthShieldEff2*100-100).toFixed(2).toString() + "%<br>Next: " + (earthShieldEff1*3).toString() + "x, and +" + (((earthShieldAmt+1)/(earthShieldAmt+8)+1)*100-100).toFixed(2).toString() + "%";
  wingBootsCost=Math.pow(3,wingBootsAmt);
  document.getElementById("buyWingBoots").innerHTML = wingBootsCost.toString() + " Shards";
  wingBootsEff1=Math.pow(3,wingBootsAmt);
  wingBootsEff2=(wingBootsAmt/(wingBootsAmt+7))+1;
  document.getElementById("wingBoots").innerHTML = "Multiply Dexterity gain by: " + wingBootsEff1.toString() + "x, and increase Dexterity's First Effect by: " + (wingBootsEff2*100-100).toFixed(2).toString() + "%<br>Next: " + (wingBootsEff1*3).toString() + "x, and +" + ((((wingBootsAmt+1)/(wingBootsAmt+8))+1)*100-100).toFixed(2).toString() + "%";
  fairyAmuletCost=Math.pow(3,fairyAmuletAmt);
  document.getElementById("buyFairyAmulet").innerHTML = fairyAmuletCost.toString() + " Shards";
  fairyAmuletEff1=Math.pow(3,fairyAmuletAmt);
  fairyAmuletEff2=0.15*fairyAmuletAmt;
  document.getElementById("fairyAmulet").innerHTML = "Multiply Charisma gain by: " + fairyAmuletEff1.toString() + "x, and increase Charisma's First Effect by: " + fairyAmuletEff2.toFixed(2).toString() + "<br>Next: " + (fairyAmuletEff1*3).toString() + "x, and +" + (fairyAmuletEff2+.15).toFixed(2).toString();
  curseGrimoreCost=Math.pow(3,curseGrimoreAmt);
  document.getElementById("buyCursedGrimore").innerHTML = curseGrimoreCost.toString() + " Shards";
  curseGrimoreEff1=Math.pow(3,curseGrimoreAmt);
  curseGrimoreEff2=.1*curseGrimoreAmt;
  document.getElementById("curseGrimore").innerHTML = "Multiply Prowess gain by: " + curseGrimoreEff1.toString() + "x, and increase Prowess's First Effect by: " + curseGrimoreEff2.toFixed(1).toString() + "<br>Next: " + (curseGrimoreEff1*3).toString() + "x, and +" + (curseGrimoreEff2+.1).toFixed(1).toString();
  dragonScaleCost=1+Math.pow(4,dragonScaleAmt);
  document.getElementById("buyDragonScales").innerHTML = dragonScaleCost.toString() + " Shards";
  dragonScaleEff1=Math.pow(3,dragonScaleAmt);
  dragonScaleEff2=.5*dragonScaleAmt;
  document.getElementById("dragonScale").innerHTML = "Multiply Greed gain by: " + dragonScaleEff1.toString() + "x, and increase Greed's Effect by: " + (dragonScaleEff2*100).toFixed(1).toString() + "%<br>Next: " + (dragonScaleEff1*3).toString() + "x, and +" + (dragonScaleEff2*100+50).toFixed(1).toString() + "%";
}
//}
//{Attribute Calculations
function vitalityChoice(){
  attChoice=2;
}
function dexterityChoice(){
  attChoice=3;
}
function charismaChoice(){
  attChoice=4;
}
function willChoice(){
  attChoice=5;
}
function prowessChoice(){
  attChoice=1;
}
function greedChoice(){
  if(milestone10True == false){
  attChoice=6;}
}
function calculateAtt(){
  if(attChoice==6 || milestone10True == true){
    greedAmt+=1*dragonScaleEff1;}
    greedEff1=ExpantaNum.add(ExpantaNum.mul((1+dragonScaleEff2),ExpantaNum.pow(greedAmt,.5)),1);
    if(ExpantaNum.gte(greedEff1,1000000)){document.getElementById("greed").innerHTML = greedEff1.toExponential(2).toString();} else{
    document.getElementById("greed").innerHTML = greedEff1.toFixed(1)}
  
  if(attChoice==1){
    prowessAmt+=willEff2*greedEff1*holySwordEff1;}
    prowessEff1=ExpantaNum.add(ExpantaNum.pow(prowessAmt,(.5+holySwordEff2)),1);
    document.getElementById("prowess").innerHTML = prowessEff1.toFixed(1);
    prowessEff2=ExpantaNum.add(ExpantaNum.pow(prowessAmt,.2),1);
    document.getElementById("prowess2").innerHTML = (Math.trunc(prowessEff2*10)/10).toString();
  
    if(attChoice==2){
    vitalityAmt+=prowessEff2*greedEff1*earthShieldEff1;}
    //vitalityEff1=(0.01+earthShieldEff2/100)*(((4*(ExpantaNum.log(4*vitalityAmt+Math.E)))/ExpantaNum.log(vitalityAmt+Math.E)+7)-11);
    console.log(earthShieldEff2);
    console.log(((-1/Math.log10(Math.log10((vitalityAmt/100)+60.05)))+4));
    vitalityEff1=((-1/Math.log10(Math.log10((vitalityAmt/100)+60.05)))+4)*(.5*earthShieldEff2);
    document.getElementById("vitality").innerHTML = vitalityEff1.toFixed(1);
    vitalityEff2=ExpantaNum.add(ExpantaNum.pow(vitalityAmt,.2),1);
    document.getElementById("vitality2").innerHTML = (Math.trunc(vitalityEff2*10)/10).toString();
  
    if(attChoice==3){
    dexterityAmt+=vitalityEff2*greedEff1*wingBootsEff1;}
    dexterityEff1=(wingBootsEff2)*ExpantaNum.log(ExpantaNum.pow(dexterityAmt,(.2))+1);
    document.getElementById("dexterity").innerHTML = dexterityEff1.toFixed(1);
    dexterityEff2=1+ExpantaNum.pow(dexterityAmt,.2);
    document.getElementById("dexterity2").innerHTML = (Math.trunc(dexterityEff2*10)/10).toString();
  
    if(attChoice==4){
    charismaAmt+=dexterityEff2*greedEff1*fairyAmuletEff1;}
    charismaEff1=ExpantaNum.add(ExpantaNum.pow(charismaAmt,(.25+fairyAmuletEff2)),1);
    document.getElementById("charisma").innerHTML = charismaEff1.toFixed(1);
    charismaEff2=1+ExpantaNum.pow(charismaAmt,.2);
    document.getElementById("charisma2").innerHTML = (Math.trunc(charismaEff2*10)/10).toString();
  
    if(attChoice==5){
    willAmt+=charismaEff2*greedEff1*curseGrimoreEff1;}
    willEff1=ExpantaNum.pow(willAmt,(.1+curseGrimoreEff2));
    document.getElementById("will").innerHTML = willEff1.toFixed(1);
    willEff2=1+ExpantaNum.pow(willAmt,.2);
    document.getElementById("will2").innerHTML = (Math.trunc(willEff2*10)/10).toString();
  
}
//}
//{Buy Generators
function buyGen1(){
  if(ExpantaNum.gte(counter,gen1Cost)){
  counter = ExpantaNum.sub(counter,gen1Cost);
  gen1+=1;
  calculateGain();
  calculateCost();}
}
function buyGen2(){
  if(ExpantaNum.gte(counter,gen2Cost)){
  counter = ExpantaNum.sub(counter,gen2Cost);
  gen2+=1;
  calculateGain();
  calculateCost();}
}
function buyGen3(){
  if(ExpantaNum.gte(counter,gen3Cost)){
  counter = ExpantaNum.sub(counter,gen3Cost);
  gen3+=1;
  calculateGain();
  calculateCost();}
}
function buyGen4(){
  if(ExpantaNum.gte(counter,gen4Cost)){
  counter = ExpantaNum.sub(counter,gen4Cost);
  gen4+=1;
  calculateGain();
  calculateCost();}
}
function buyGen5(){
  if(ExpantaNum.gte(counter,gen5Cost)){
  counter = ExpantaNum.sub(counter,gen5Cost);
  gen5+=1;
  calculateGain();
  calculateCost();}
}
function buyGen6(){
  if(ExpantaNum.gte(counter,gen6Cost)){
  counter = ExpantaNum.sub(counter,gen6Cost);
  gen6+=1;
  calculateGain();
  calculateCost();}
}
function buyGen7(){
  if(ExpantaNum.gte(counter,gen7Cost)){
  counter = ExpantaNum.sub(counter,gen7Cost);
  gen7+=1;
  calculateGain();
  calculateCost();}
}
function buyGen8(){
  if(ExpantaNum.gte(counter,gen8Cost)){
  counter = ExpantaNum.sub(counter,gen8Cost);
  gen8+=1;
  calculateGain();
  calculateCost();}
}
function buyGen9(){
  if(ExpantaNum.gte(counter,gen9Cost)){
  counter = ExpantaNum.sub(counter,gen9Cost);
  gen9+=1;
  calculateGain();
  calculateCost();}
}
var gen1Floor = 0;
var gen1Purc = 0;
var gen2Floor = 0;
var gen2Purc = 0;
function buyMax(){
  if(ExpantaNum.gte(counter,gen9Cost)){
  gen9Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*96342),100000000000000000),96342))-gen9;
  gen9Purc=ExpantaNum.div(ExpantaNum.mul(100000000000000000,ExpantaNum.pow(96342,gen9Floor-1+gen9)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen9Purc);
  gen9 += gen9Floor;
  }
  if(ExpantaNum.gte(counter,gen8Cost)){
  gen8Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*24235),1000000000000000),24235))-gen8;
  gen8Purc=ExpantaNum.div(ExpantaNum.mul(1000000000000000,ExpantaNum.pow(24235,gen8Floor-1+gen8)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen8Purc);
  gen8 += gen8Floor;
  }
  if(ExpantaNum.gte(counter,gen7Cost)){
  gen7Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*9567),10000000000000),9567))-gen7;
  gen7Purc=ExpantaNum.div(ExpantaNum.mul(10000000000000,ExpantaNum.pow(9567,gen7Floor-1+gen7)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen7Purc);
  gen7 += gen7Floor;
  }
  if(ExpantaNum.gte(counter,gen6Cost)){
  gen6Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*2468),100000000000),2468))-gen6;
  gen6Purc=ExpantaNum.div(ExpantaNum.mul(100000000000,ExpantaNum.pow(2468,gen6Floor-1+gen6)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen6Purc);
  gen6 += gen6Floor;
  }
  if(ExpantaNum.gte(counter,gen5Cost)){
  gen5Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*986),1000000000),986))-gen5;
  gen5Purc=ExpantaNum.div(ExpantaNum.mul(1000000000,ExpantaNum.pow(986,gen5Floor-1+gen5)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen5Purc);
  gen5 += gen5Floor;
  }
  if(ExpantaNum.gte(counter,gen4Cost)){
  gen4Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*234),10000000),234))-gen4;
  gen4Purc=ExpantaNum.div(ExpantaNum.mul(10000000,ExpantaNum.pow(234,gen4Floor-1+gen4)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen4Purc);
  gen4 += gen4Floor;
  }
  if(ExpantaNum.gte(counter,gen3Cost)){
  gen3Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1*88),100000),88))-gen3;
  gen3Purc=ExpantaNum.div(ExpantaNum.mul(100000,ExpantaNum.pow(88,gen3Floor-1+gen3)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen3Purc);
  gen3 += gen3Floor;
  }
  if(ExpantaNum.gte(counter,gen2Cost)){
  gen2Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1),40),25))-gen2;
  gen2Purc=ExpantaNum.div(ExpantaNum.mul(1000,ExpantaNum.pow(25,gen2Floor-1+gen2)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen2Purc);
  gen2 += gen2Floor;
  }
  if(ExpantaNum.gte(counter,gen1Cost)){
  gen1Floor=Math.floor(ExpantaNum.log10((ExpantaNum.mul(counter,charismaEff1))))-gen1;
  gen1Purc=ExpantaNum.div(ExpantaNum.mul(10,ExpantaNum.pow(10,gen1Floor-1+gen1)),charismaEff1);
  counter = ExpantaNum.sub(counter,gen1Purc);
  gen1 += gen1Floor;
  }
}
//}
//{Generator Calculations
function calculateGain(){
  gen9Pd=ExpantaNum.add(gen9Pd,willEff1);
  gen9Tot=ExpantaNum.add(gen9,gen9Pd);
  if(ExpantaNum.gte(gen9Tot,1000000)){
    document.getElementById("gen9").innerHTML = gen9Tot.toExponential(2).toString() + " (" + gen9.toString() + ")";} else
  document.getElementById("gen9").innerHTML = Math.trunc(gen9Tot).toString() + " (" + gen9.toString() + ")";
  gen9Mult=ExpantaNum.pow(ExpantaNum.add(2,vitalityEff1),gen9);
  if(ExpantaNum.gte(gen9Mult,1000000)){
    document.getElementById("gen9Mult").innerHTML = "Country: " + gen9Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen9Mult").innerHTML = "Country: " + (Math.trunc(gen9Mult*100)/100).toString() + "x";
  
  gen8Pd=ExpantaNum.add(gen8Pd,ExpantaNum.mul(gen9Tot , gen9Mult));
  
  gen8Tot=ExpantaNum.add(gen8,gen8Pd);
  if(ExpantaNum.gte(gen8Tot,1000000)){
    document.getElementById("gen8").innerHTML = gen8Tot.toExponential(2).toString() + " (" + gen8.toString() + ")";} else
  document.getElementById("gen8").innerHTML = Math.trunc(gen8Tot).toString() + " (" + gen8.toString() + ")";
  gen8Mult=ExpantaNum.pow(ExpantaNum.add(1.9,vitalityEff1),gen8);
  if(ExpantaNum.gte(gen8Mult,1000000)){
    document.getElementById("gen8Mult").innerHTML = "State: " + gen8Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen8Mult").innerHTML = "State: " + (Math.trunc(gen8Mult*100)/100).toString() + "x";
  
  gen7Pd=ExpantaNum.add(gen7Pd,ExpantaNum.mul(gen8Tot , gen8Mult));
  gen7Tot=ExpantaNum.add(gen7,gen7Pd);
  if(ExpantaNum.gte(gen7Tot,1000000)){
    document.getElementById("gen7").innerHTML = gen7Tot.toExponential(2).toString() + " (" + gen7.toString() + ")";} else
  document.getElementById("gen7").innerHTML = Math.trunc(gen7Tot).toString() + " (" + gen7.toString() + ")";
  gen7Mult=ExpantaNum.pow(ExpantaNum.add(1.8,vitalityEff1),gen7);
  if(ExpantaNum.gte(gen7Mult,1000000)){
    document.getElementById("gen7Mult").innerHTML = "Metropolis: " + gen7Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen7Mult").innerHTML = "Metropolis: " + (Math.trunc(gen7Mult*100)/100).toString() + "x";
  
  gen6Pd=ExpantaNum.add(gen6Pd,ExpantaNum.mul(gen7Tot , gen7Mult));
  gen6Tot=ExpantaNum.add(gen6,gen6Pd);
  if(ExpantaNum.gte(gen6Tot,1000000)){
    document.getElementById("gen6").innerHTML = gen6Tot.toExponential(2).toString() + " (" + gen6.toString() + ")";} else
  document.getElementById("gen6").innerHTML = Math.trunc(gen6Tot).toString() + " (" + gen6.toString() + ")";
  gen6Mult=ExpantaNum.pow(ExpantaNum.add(1.7,vitalityEff1),gen6);
  if(ExpantaNum.gte(gen6Mult,1000000)){
    document.getElementById("gen6Mult").innerHTML = "County: " + gen6Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen6Mult").innerHTML = "County: " + (Math.trunc(gen6Mult*100)/100).toString() + "x";
  
  gen5Pd=ExpantaNum.add(gen5Pd,ExpantaNum.mul(gen6Tot , gen6Mult));
  gen5Tot=ExpantaNum.add(gen5,gen5Pd);
  if(ExpantaNum.gte(gen5Tot,1000000)){
    document.getElementById("gen5").innerHTML = gen5Tot.toExponential(2).toString() + " (" + gen5.toString() + ")";} else
  document.getElementById("gen5").innerHTML = Math.trunc(gen5Tot).toString() + " (" + gen5.toString() + ")";
  gen5Mult=ExpantaNum.pow(ExpantaNum.add(1.6,vitalityEff1),gen5);
  if(ExpantaNum.gte(gen5Mult,1000000)){
    document.getElementById("gen5Mult").innerHTML = "City: " + gen5Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen5Mult").innerHTML = "City: " + (Math.trunc(gen5Mult*100)/100).toString() + "x";
  
  gen4Pd=ExpantaNum.add(gen4Pd,ExpantaNum.mul(gen5Tot , gen5Mult));
  gen4Tot=ExpantaNum.add(gen4,gen4Pd);
  if(ExpantaNum.gte(gen4Tot,1000000)){
    document.getElementById("gen4").innerHTML = gen4Tot.toExponential(2).toString() + " (" + gen4.toString() + ")";} else
  document.getElementById("gen4").innerHTML = Math.trunc(gen4Tot).toString() + " (" + gen4.toString() + ")";
  gen4Mult=ExpantaNum.pow(ExpantaNum.add(1.5,vitalityEff1),gen4);
  if(ExpantaNum.gte(gen4Mult,1000000)){
    document.getElementById("gen4Mult").innerHTML = "Town: " + gen4Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen4Mult").innerHTML = "Town: " + (Math.trunc(gen4Mult*100)/100).toString() + "x";
  
  gen3Pd=ExpantaNum.add(gen3Pd,ExpantaNum.mul(gen4Tot , gen4Mult));
  gen3Tot=ExpantaNum.add(gen3,gen3Pd);
  if(ExpantaNum.gte(gen3Tot,1000000)){
    document.getElementById("gen3").innerHTML = gen3Tot.toExponential(2).toString() + " (" + gen3.toString() + ")";} else
  document.getElementById("gen3").innerHTML = Math.trunc(gen3Tot).toString() + " (" + gen3.toString() + ")";
  gen3Mult=ExpantaNum.pow(ExpantaNum.add(1.4,vitalityEff1),gen3);
  if(ExpantaNum.gte(gen3Mult,1000000)){
    document.getElementById("gen3Mult").innerHTML = "Village: " + gen3Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen3Mult").innerHTML = "Village: " + (Math.trunc(gen3Mult*100)/100).toString() + "x";
  
  gen2Pd=ExpantaNum.add(gen2Pd,ExpantaNum.mul(gen3Tot , gen3Mult));
  gen2Tot=ExpantaNum.add(gen2,gen2Pd);
  if(ExpantaNum.gte(gen2Tot,1000000)){
  document.getElementById("gen2").innerHTML = gen2Tot.toExponential(2).toString() + " (" + gen2.toString() + ")";} else
  document.getElementById("gen2").innerHTML = Math.trunc(gen2Tot).toString() + " (" + gen2.toString() + ")";
  gen2Mult=ExpantaNum.pow(ExpantaNum.add(1.3,vitalityEff1),gen2);
  if(ExpantaNum.gte(gen2Mult,1000000)){
    document.getElementById("gen2Mult").innerHTML = "Hamlet: " + gen2Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen2Mult").innerHTML = "Hamlet: " + (Math.trunc(gen2Mult*100)/100).toString() + "x";
  
  gen1Pd=ExpantaNum.add(gen1Pd,ExpantaNum.mul(gen2Tot , gen2Mult));
  gen1Tot=ExpantaNum.add(ExpantaNum.add(gen1,gen1Pd),dexterityEff1);
  if(ExpantaNum.gte(gen1Tot,1000000)){
  document.getElementById("gen1").innerHTML = gen1Tot.toExponential(2).toString() + " (" + gen1.toString() + ")";} else
  document.getElementById("gen1").innerHTML = Math.trunc(gen1Tot).toString() + " (" + gen1.toString() + ")";
  gen1Mult=ExpantaNum.mul(ExpantaNum.pow(ExpantaNum.add(1.2,vitalityEff1),ExpantaNum.add(gen1,dexterityEff1)),goldChaliceEff1);
  if(ExpantaNum.gte(gen1Mult,1000000)){
    document.getElementById("gen1Mult").innerHTML = "Peasent: " + gen1Mult.toExponential(2).toString() + "x";} else
  document.getElementById("gen1Mult").innerHTML = "Peasent: " + (Math.trunc(gen1Mult*100)/100).toString() + "x";
  
  
  gain = ExpantaNum.mul(ExpantaNum.mul(gen1Tot , gen1Mult) , prowessEff1);
}
//}
//{Generator Cost Calculations
function calculateCost(){
  //console.log(charismaEff1);
  //console.log(ExpantaNum.pow(96342,gen9));
  //console.log(ExpantaNum.mul(100000000000000000,ExpantaNum.pow(96342,gen9)));
  //console.log(ExpantaNum.div(ExpantaNum.mul(100000000000000000,ExpantaNum.pow(96342,gen9)),charismaEff1));
  gen1Cost=ExpantaNum.div(ExpantaNum.mul(10,ExpantaNum.pow(10,gen1)),charismaEff1);
  gen2Cost=ExpantaNum.div(ExpantaNum.mul(1000,ExpantaNum.pow(25,gen2)),charismaEff1);
  gen3Cost=ExpantaNum.div(ExpantaNum.mul(100000,ExpantaNum.pow(88,gen3)),charismaEff1);
  gen4Cost=ExpantaNum.div(ExpantaNum.mul(10000000,ExpantaNum.pow(234,gen4)),charismaEff1);
  gen5Cost=ExpantaNum.div(ExpantaNum.mul(1000000000,ExpantaNum.pow(986,gen5)),charismaEff1);
  gen6Cost=ExpantaNum.div(ExpantaNum.mul(100000000000,ExpantaNum.pow(2468,gen6)),charismaEff1);
  gen7Cost=ExpantaNum.div(ExpantaNum.mul(10000000000000,ExpantaNum.pow(9567,gen7)),charismaEff1);
  gen8Cost=ExpantaNum.div(ExpantaNum.mul(1000000000000000,ExpantaNum.pow(24235,gen8)),charismaEff1);
  gen9Cost=ExpantaNum.div(ExpantaNum.mul(100000000000000000,ExpantaNum.pow(96342,gen9)),charismaEff1);
  //console.log(gen9Cost);
  if(ExpantaNum.gte(gen1Cost,1000000)){
    gen1Cost = gen1Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen2Cost,1000000)){
    gen2Cost = gen2Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen3Cost,1000000)){
    gen3Cost = gen3Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen4Cost,1000000)){
    gen4Cost = gen4Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen5Cost,1000000)){
    gen5Cost = gen5Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen6Cost,1000000)){
    gen6Cost = gen6Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen7Cost,1000000)){
    gen7Cost = gen7Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen8Cost,1000000)){
    gen8Cost = gen8Cost.toFixed(1);
  }
  if(ExpantaNum.gte(gen9Cost,1000000)){
    gen9Cost = gen9Cost.toFixed(1);
  }
  //console.log(gen9Cost);
  document.getElementById("gen1Cost").innerHTML = gen1Cost.toString(); 
  document.getElementById("gen2Cost").innerHTML = gen2Cost.toString(); 
  document.getElementById("gen3Cost").innerHTML = gen3Cost.toString(); 
  document.getElementById("gen4Cost").innerHTML = gen4Cost.toString();
  document.getElementById("gen5Cost").innerHTML = gen5Cost.toString(); 
  document.getElementById("gen6Cost").innerHTML = gen6Cost.toString();
  document.getElementById("gen7Cost").innerHTML = gen7Cost.toString(); 
  document.getElementById("gen8Cost").innerHTML = gen8Cost.toString();
  document.getElementById("gen9Cost").innerHTML = gen9Cost.toString(); 
}
//}
//{Relic Reset Button
function artifactResetMid(){
  hmm();
}
function hmm(){
  artifactShard+=artifactReset;
  start1();
}
//}
//{Relic Milestones
function artifactMilestones(){
if(artifactResetAmt >= 1){
  document.getElementById("M1").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen1Cost) /*&& ExpantaNum.isFinite(gen1Cost)*/){
  gen1Floor=Math.floor(ExpantaNum.log10((ExpantaNum.mul(counter,charismaEff1))))-gen1;
  gen1Purc=ExpantaNum.div(ExpantaNum.mul(10,ExpantaNum.pow(10,gen1Floor-1+gen1)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen1Purc);
  gen1 += gen1Floor;
  }
}
if(artifactResetAmt >= 2){
  document.getElementById("M2").style.backgroundColor = "limegreen";
  //console.log(ExpantaNum.gte(counter,gen2Cost));
  if(ExpantaNum.gte(counter,gen2Cost) && ExpantaNum.isFinite(gen2Cost)){
  gen2Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,charismaEff1),40),25))-gen2;
  gen2Purc=ExpantaNum.div(ExpantaNum.mul(1000,ExpantaNum.pow(25,gen2Floor-1+gen2)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen2Purc);
  gen2 += gen2Floor;
  //console.log(gen2Floor);
  }
}
if(artifactResetAmt >= 3){
  document.getElementById("M3").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen3Cost) && ExpantaNum.isFinite(gen3Cost)){
  gen3Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,88)),100000),88))-gen3;
  gen3Purc=ExpantaNum.div(ExpantaNum.mul(100000,ExpantaNum.pow(88,gen3Floor-1+gen3)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen3Purc);
  gen3 += gen3Floor;
  }
}
if(artifactResetAmt >= 4){
  document.getElementById("M4").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen4Cost) && ExpantaNum.isFinite(gen4Cost)){
  gen4Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,234)),10000000),234))-gen4;
  gen4Purc=ExpantaNum.div(ExpantaNum.mul(10000000,ExpantaNum.pow(234,gen4Floor-1+gen4)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen4Purc);
  gen4 += gen4Floor;
  }
}
if(artifactResetAmt >= 5){
  document.getElementById("M5").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen5Cost) && ExpantaNum.isFinite(gen5Cost)){
  gen5Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,986)),1000000000),986))-gen5;
  gen5Purc=ExpantaNum.div(ExpantaNum.mul(1000000000,ExpantaNum.pow(986,gen5Floor-1+gen5)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen5Purc);
  gen5 += gen5Floor;
  }
}
if(artifactResetAmt >= 6){
  document.getElementById("M6").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen6Cost) && ExpantaNum.isFinite(gen6Cost)){
  gen6Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,2468)),100000000000),2468))-gen6;
  gen6Purc=ExpantaNum.div(ExpantaNum.mul(100000000000,ExpantaNum.pow(2468,gen6Floor-1+gen6)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen6Purc);
  gen6 += gen6Floor;
  }
}
if(artifactResetAmt >= 7){
  document.getElementById("M7").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen7Cost) && ExpantaNum.isFinite(gen7Cost)){
  gen7Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,9567)),10000000000000),9567))-gen7;
  gen7Purc=ExpantaNum.div(ExpantaNum.mul(10000000000000,ExpantaNum.pow(9567,gen7Floor-1+gen7)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen7Purc);
  gen7 += gen7Floor;
  }
}
if(artifactResetAmt >= 8){
  document.getElementById("M8").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen8Cost) && ExpantaNum.isFinite(gen8Cost)){
  gen8Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,24235)),1000000000000000),24235))-gen8;
  gen8Purc=ExpantaNum.div(ExpantaNum.mul(1000000000000000,ExpantaNum.pow(24235,gen8Floor-1+gen8)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen8Purc);
  gen8 += gen8Floor;
  }
}
if(artifactResetAmt >= 9){
  document.getElementById("M9").style.backgroundColor = "limegreen";
  if(ExpantaNum.gte(counter,gen9Cost) && ExpantaNum.isFinite(gen9Cost)){
  gen9Floor=Math.floor(ExpantaNum.logBase(ExpantaNum.div(ExpantaNum.mul(counter,ExpantaNum.mul(charismaEff1,96342)),100000000000000000),96342))-gen9;
  gen9Purc=ExpantaNum.div(ExpantaNum.mul(100000000000000000,ExpantaNum.pow(96342,gen9Floor-1+gen9)),charismaEff1);
  //counter = ExpantaNum.sub(counter,gen9Purc);
  gen9 += gen9Floor;
  }
}
if(artifactResetAmt >= 10){
  document.getElementById("M10").style.backgroundColor = "limegreen";
  milestone10True = true;
}}
//}