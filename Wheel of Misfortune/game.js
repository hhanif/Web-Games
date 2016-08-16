
var colAList = [];
var ideas = new Array();
var timerKiller;
var spinToggle = Boolean(false);
ideas[0] = "Truth";
ideas[1] = "Dare";
ideas[2] = "Who's the 2nd hottest person in the room";
ideas[3] = "Take a shot from the cup of the person next to you";
ideas[4] = "Pick someone to take a shot with you";
ideas[5] = "Spit a rap or sing a song";
ideas[6] = "Spin again";
ideas[7] = "Take off an article of clothing";
ideas[8] = "Everyone drinks";
ideas[9] = "Serenade the person to your left";
ideas[10] = "Group game of <q>Never have I ever</q>"; 
ideas[11] = "Write your name on someone's forehead";
ideas[12] = "Draw a cat on someone's back";
ideas[13] = "Make a rule for the night";
ideas[14] = "Last person to touch a wall in the room has to drink";
ideas[15] = "Girls drink";
ideas[16] = "Guys drink";
ideas[17] = "Lick a cheek of your choosing";
ideas[18] = "While sitting, try to stand up without your hands";
ideas[19] = "Give a compliment to each person in the room";
ideas[20] = "Last person to touch a door handle drinks";
ideas[21] = "Do 10 push ups";
ideas[22] = "SAFE";
ideas[23] = "Share your best <q>I have fucked up...</q> story";
ideas[24] = "Staring contest with person across from you";
ideas[25] = "Sit in your underwear for the rest of the night";

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cycle() {
	window.clearTimeout(timerKiller);
	var i = getRandomInt(0, 25)
  	var name = ideas[i];
    outputElement = document.getElementById("placeholder-2");
    timerKiller = setInterval(function() {
		outputElement.innerHTML = name;
	}, 50);
}
window.onload = function() {
  cycle();
};
for(var k = 0; k<(25); k++){
	colAList.push(ideas[k]+ "<br/>");
}	
document.getElementById('placeholder-1').innerHTML = (colAList.join(""));
