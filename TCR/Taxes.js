//{Variables
var curr1 = 1;
var house = 0;
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
	document.getElementById("money").innerHTML = Math.trunc(curr1*10)/10;
	document.getElementById("corruption").innerHTML = Math.round(corruption*10)/10;
	document.getElementById("houses").innerHTML = house;
	document.getElementById("moneyDir").innerHTML = house;
	document.getElementById("houseCost").innerHTML = "\n" + Math.trunc(houseCost*10)/10 + " Dollars";
}
//}
//{Calculate Cost
function calcCost(){
	houseCost = Math.pow(10,(house-corruption+1));
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