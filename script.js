/*
	Below is code for Tic Tac Toe
*/

//holds X or O
var character = "O";

//handles the player's turn
function turn(location){

	if (document.getElementById(location).innerHTML == ""){

		if(character == "O"){
			character = "X";
		}
		else{
			character = "O";
		}

		//get which box is clicked
		document.getElementById(location).innerHTML= character;

		//update results of who is playing
		document.getElementById("results").innerHTML = "It's " + character + " turn!";
	}

	checkWinner();
}

//checks for a winner
function checkWinner(){

	var r1c1 = document.getElementById("r1c1").innerHTML;
	var r1c2 = document.getElementById("r1c2").innerHTML;
	var r1c3 = document.getElementById("r1c3").innerHTML;
	var r2c1 = document.getElementById("r2c1").innerHTML;
	var r2c2 = document.getElementById("r2c2").innerHTML;
	var r2c3 = document.getElementById("r2c3").innerHTML;
	var r3c1 = document.getElementById("r3c1").innerHTML;
	var r3c2 = document.getElementById("r3c2").innerHTML;
	var r3c3 = document.getElementById("r3c3").innerHTML;

	if((r1c1 == r1c2) && (r1c1 == r1c3) && (r1c1 != "") ||
	   (r2c1 == r2c2) && (r2c1 == r2c3) && (r2c1 != "") ||
	   (r3c1 == r3c2) && (r3c1 == r3c3) && (r3c1 != "") ||
	   (r1c1 == r2c1) && (r1c1 == r3c1) && (r1c1 != "") ||
	   (r1c2 == r2c2) && (r1c2 == r3c2) && (r1c2 != "") ||
	   (r1c3 == r2c3) && (r1c3 == r3c3) && (r1c3 != "") ||
	   (r1c1 == r2c2) && (r1c1 == r3c3) && (r1c1 != "") ||
	   (r1c3 == r2c2) && (r1c3 == r3c1) && (r1c3 != "")){

		//update results with winner
		document.getElementById("results").innerHTML = character + " is the winner!"
	}
}



/*
	Below is code for Magic 8 Ball
*/

//declare an array - a list of magic 8 ball responses
var list = ["It is decidedly so!",
			"Outlook not so good.", 
			"Yes!",
			"No!",
			"There's a high possibility.",
			"Without a doubt!",
			"Very doubtful.",
			"Ask again later.",
			"Cannot predict now!",
			"Signs point Yes!"];

var whichPic = "Magic8BallFront.jpg";


//This function is called when the 8 ball is clicked
function shakeMagic8Ball(){

	//variable to hold random number
	var randomNumber = Math.floor(Math.random() * 10);

	//check if front image - Magic8BallFront.jpg"\
	if(whichPic == "Magic8BallFront.jpg"){
		//change image to backside
		document.getElementById("magic8ball").src="Magic8Ball.png";

		whichPic = "Magic8Ball.png";
	
		//message for when 8 ball is on bakside
		document.getElementById("results").innerHTML=list[randomNumber];

		//this controls the other paragraph
		document.getElementById("results2").innerHTML="Do you want to try again?"
	}
	else{
		document.getElementById("magic8ball").src="Magic8BallFront.jpg";

		whichPic = "Magic8BallFront.jpg";

		document.getElementById("results2").innerHTML="";



	}
}