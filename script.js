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