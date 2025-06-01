window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script92 = function()
{
  Array.from(document.querySelectorAll('.acc-textinput')).forEach(el => {
    el.setAttribute("autocomplete", "off");
    el.maxLength = "8";
    el.addEventListener('keyup', () => {
        el.blur();
        el.focus();
        textBox1.style.display = "none";
    });
    el.addEventListener('keydown', () => {
        textBox1.style.display = "none";
    });
});
}

window.Script93 = function()
{
  //document.querySelector("#slide-window > div > div > div.slide-transition-container > div > div > div.slide-layer.base-layer.shown > div.slide-object.slide-object-textinput.shown > div > div > input[type=text]").value =""

var x = document.getElementsByTagName("input");
for (let index = 0; index < x.length; index++) {
    x[index].value="";
}

}

window.Script94 = function()
{
  const textBox1 = object('6g8BWgrcMAK');

textBox1.style.display = "block";
}

window.Script95 = function()
{
  const textBox1 = object('6g8BWgrcMAK');

textBox1.style.display = "none";
}

window.Script96 = function()
{
  const picture15 = object('5kFgJZvvThv');

let Text_Shape = document.querySelector('[data-acc-text="looking"]');

//let Text_Shape = document.getElementById("uniqueDomId-193")

//Text_Shape.classList.add("rotate-center");

//Text_Shape.setAttribute("class", "rotate-center");


var x = picture15.rotation = 0;

var myInterval = setInterval(displayHello, 10);

function displayHello() {

	if (x < 360) {
		picture15.rotation += 3;
		x += 3;
	}else{
		clearInterval(myInterval);
	}
}
}

window.Script97 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script98 = function()
{
  const textBox1 = object('5uybE7UqZvR');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(83%) sepia(25%) saturate(5777%) hue-rotate(358deg) brightness(105%) contrast(105%)");


}

window.Script99 = function()
{
  const textBox1 = object('5uybE7UqZvR');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(24%) sepia(58%) saturate(7016%) hue-rotate(360deg) brightness(96%) contrast(114%)");

}

window.Script100 = function()
{
  const textBox1 = object('6MCj3FAMQM1');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(77%) sepia(11%) saturate(2708%) hue-rotate(53deg) brightness(95%) contrast(88%)");

}

window.Script101 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script102 = function()
{
  const textBox1 = object('6MmUe2k697q');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(83%) sepia(25%) saturate(5777%) hue-rotate(358deg) brightness(105%) contrast(105%)");


}

window.Script103 = function()
{
  const textBox1 = object('6MmUe2k697q');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(24%) sepia(58%) saturate(7016%) hue-rotate(360deg) brightness(96%) contrast(114%)");

}

window.Script104 = function()
{
  const textBox1 = object('6MCj3FAMQM1');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(77%) sepia(11%) saturate(2708%) hue-rotate(53deg) brightness(95%) contrast(88%)");

}

window.Script105 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script106 = function()
{
  const textBox1 = object('5z1G5uBRnuv');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(83%) sepia(25%) saturate(5777%) hue-rotate(358deg) brightness(105%) contrast(105%)");


}

window.Script107 = function()
{
  const textBox1 = object('5z1G5uBRnuv');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(24%) sepia(58%) saturate(7016%) hue-rotate(360deg) brightness(96%) contrast(114%)");

}

window.Script108 = function()
{
  const textBox1 = object('6MCj3FAMQM1');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(77%) sepia(11%) saturate(2708%) hue-rotate(53deg) brightness(95%) contrast(88%)");

}

window.Script109 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script110 = function()
{
  const textBox1 = object('6MCj3FAMQM1');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(83%) sepia(25%) saturate(5777%) hue-rotate(358deg) brightness(105%) contrast(105%)");


}

window.Script111 = function()
{
  const textBox1 = object('6MCj3FAMQM1');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(24%) sepia(58%) saturate(7016%) hue-rotate(360deg) brightness(96%) contrast(114%)");

}

window.Script112 = function()
{
  const textBox1 = object('6MCj3FAMQM1');

textBox1.style.filter = ("brightness(0) saturate(100%) invert(77%) sepia(11%) saturate(2708%) hue-rotate(53deg) brightness(95%) contrast(88%)");

}

window.Script113 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script114 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script115 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script116 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

window.Script117 = function()
{
  var player = GetPlayer();
var timerId;
var sec;
var Timer_Action;

timerId = setInterval(startTimer, 1000);

function startTimer(){
	Timer_Action = player.GetVar("Action_Timer");
	sec = player.GetVar("CountSec");
	
		if (sec == 0 || !Timer_Action) {
	        clearInterval(timerId);
	        console.log(Timer_Action)
	    }
	    
	Timer_Action ? sec-- : sec;
	var minutes = Math.floor(sec / 60);
	var seconds = sec % 60;
	
	var timeString = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, '0');
	player.SetVar("Countdown", timeString);
	player.SetVar("CountSec", sec);

    
}
}

};
