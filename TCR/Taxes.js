//{Variables
var curr1 = 1;
var house = 1;
var corruption = 0;
var houseCost = 10;
//}
//{Game Tick
function incrementer(){
	calcCost();
	calcCurrency();
}
setInterval(incrementer, 100);
//}
//{Calculate Currency
function calcCurrency(){
	curr1 += house/10;
	document.getElementById("money").innerHTML = Curr1;
	document.getElementById("corruption").innerHTML = corruption;
}
//}
//{Calculate Cost
function calcCost(){
	houseCost = pow(10,(house-corruption));
}
//}
//{Button Press
function actCorrupt(){
	corruption += .1;
}
function actBuyHouseAttempt(){
	if(curr1 >= houseCost){
		curr1 -= houseCost;
		house += 1;
		corruption = 0;
	}
}
//}