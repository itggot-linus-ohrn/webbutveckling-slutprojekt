let i = 0
let boxes = document.querySelectorAll(".start")
while(i < boxes.length){
	let box = boxes[i]
	x_pos = Math.floor(Math.random() * 80)
	y_pos = Math.floor(Math.random() * 80)
	box.style.left = x_pos+'%'
	box.style.top = y_pos+'%'
	i++;
	console.log("OMG")   
}

function wait(ms)
{
	var d = new Date();
	var d2 = null;
	do { d2 = new Date(); }
	while(d2-d < ms);
}

var c = document.getElementById("c");
var ctx = c.getContext("2d");

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var chinese = "10GETGOOD010101010101010101011010101000101010100101010101010101101010101101010101101010101010101010101010101010001010101010101001001010";
//converting the string into an array of single characters
chinese = chinese.split("");

var font_size = 10;
var columns = c.width/font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
drops[x] = 1; 

//drawing the characters
function draw()
{
	//Black BG for the canvas
	//translucent BG to show trail
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, c.width, c.height);
	
	ctx.fillStyle = "#0F0"; //green text
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		wait(2);
		//a random chinese character to print
		var text = chinese[Math.floor(Math.random()*chinese.length)];
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.975)
		drops[i] = 0;
		
		//incrementing Y coordinate
		drops[i]++;
		
	}
}

setInterval(draw, 33);

function lada(){	
	let laddor = document.querySelectorAll(".box")
	for (i = 0; i < laddor.length; i++) {
		let ladd = laddor[i]
		rand = Math.floor(Math.random() * 4)
		ladd.setAttribute("id", rand)
		console.log("test")
	}
	setTimeout(ladaloop, 500)
}

function ladaloop(){
	lada()
}


function startTimer() {
	let duration = 60 * 10;
	let timer = duration, minutes, seconds;
	let display = document.querySelector('#time');
	setInterval(function () {
		while (timer >= 0){

			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10);
			
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			
			let str = "grillpaj banankorv";
			let para = document.createElement("P");
			para.innerHTML = str[i];
			document.getElementById("main").appendChild(para);
			display.textContent = minutes + ":" + seconds;
		}
		
		if (--timer < 0) {
			for(var i = 0; i === i; i++) {}
		}
	}, 1000);
}
