var messages = document.getElementById("messages");
var messageArr = [["John Doe","","Hello Jane Doe"],["Jane Doe","","Hello there"]];
var e1;
var messageStore;
var messageArrSingle;
function updateMessages(){
fetch('https://loyal-alchemist.github.io/KillerLinesServer.txt')
  .then(response => response.text())
  .then((data) => {
    messageStore = data;
  })
messageArrSingle = messageStore.split("\n")[4].split(".").split(",");
console.log(messageArrSingle);
i = 0;
messages.innerHTML = "";
while(i<messageArr.length){
e1 = document.createElement("SPAN");
e1.innerHTML = messageArr[i][0] + "<br>" + messageArr[i][2];
e1.className = "message";
messages.appendChild(e1);
i+=1;
}
}
function update(){
updateMessages;
}
setInterval(update,10);