/* This if statement decides if the switch should be run or not. BigMommy ither being true or false if the deciding factor, so the switch only runs once. */
var BigMommy = false;
function Jiopoi(){
	if(BigMommy)
	{
		Happy2();
		window.setTimeout(Happy4,8000);
	}else{
		DearHearts();
	}
}
/*These variables are the text for the following document.getElementById functions */
var F = "You do realize that you are clicking in the wrong place right now? If you want to see more information about a class you can just go ask me! <br> If your that desperate you can just go use the <br> search-bar below."
var M = "Sorry folks, your going to have to refresh the page before you can search again! Don't Worry, we'll do it for you! We do what we must because we can."
var H = "Hey buddy, who's leg are you trying to pull? That ain't no class!"
/*This is what happens is you click on a table */
function Happy() {
	 document.getElementById("Table1").innerHTML = F;
}
/*This is run when the Search Class button is pressed twice */
function Happy2() {
	 document.getElementById("Table1").innerHTML = M;
}
/*This is what happens if a inproper class or no class at all in run in the search bar. */
function Happy3() {
	 document.getElementById("Table1").innerHTML = H;
}
/*This refreshes the page. */
function Happy4() {
	history.go(0);
}
/*This is what happens if you click on the picture of Sans. Prepare to suffer. */
function BBBBBB() {
	alert("Don't click here");
	alert("Seriously, don't");
	alert("Because I might get mad.");
	alert("And when I get mad, kitty gets upset");
	alert("And when kitty gets upset");
	alert("People die!");
	alert("Did you get the Austen Powers reference?");
	alert("There is also a Portal reference hidden in this webpage. Can you find it?");
	alert("I put it in... because I can.");
	alert("The cake is a lie.");
	alert("Oops. There's two more!");
	alert("When should I stop writting these?");
	alert("I should start studying for science.");
	alert("Ya, but I can't wait to see the end result!");
	alert("So when should I stop?");
	alert("Maybe after 1...");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("2");
	alert("3");
	alert("Okay, I've had enough.");
	alert("Welcome to google GlaDos");
}
/*This is what happens if you press the button twice, before the page is refreshed. */
var Hananna = "Sorry Folks, if you want to search again, you got to refresh the page!"
function Kilooo() {
	document.getElementById("Table2").innerHTML = Hananna;
}
/*This is my main switch. The tabbing may be a bit strange, but to me this is more logical. */
function DearHearts() {
	var typedClass = document.getElementById("SearchBar").value;
	switch (typedClass){
		case "French":
			var Go = "French";
		break;
		case "Math":
			var Go = "Math";
		break;
		case "English":
			var Go = "English";
		break;
		case "Computer Programing":
			var Go = "Computer-Programing";
		break;
		case "Theater Arts":
			var Go = "Theater-Arts";
		break;
		case "Speech":
			var Go = "Speech";
		break;
		case "Physical Education":
			var Go = "Physical-Education";
		break;
		case "Advisors":
			var Go = "Advisors";
		break;
		case "Homeroom":
			var Go = "Homeroom";
		break;
		case "Religion":
			var Go = "Religion";
		break;
		case "Level-Assembly":
			var Go = "Level-Assembly";
		break;
		case "Science":
			var Go = "Science";
		break;
		case "History":
			var Go = "History";
		break;
		default: Happy3();
	}
	/*This is where the background color is changed. */
	var LetsGo = document.getElementsByClassName(Go);
	for (i = 0; i < LetsGo.length; i++) {
		LetsGo[i].style.backgroundColor = "yellow";
	}
	/*This is where BigMommy becomes true, making the initial if statement refresh the page next time the button is pressed. */
	BigMommy = true;
}
/* This section of the code features projects that I was not able to complete before the due date.
		
	Search by class
		
	var Math = "Miss Math";
	var French = "Miss Baruthio";
	var Speech = "Mr. Hanano";
	var Theater-Arts = "Miss Eves";
	var Computer-Programing = "Mr. Linux";
	var English = "Mr. Achillies";
	var History = "Mr. DnD";
	var Advisors = "Mr. Help";
	var Physical-Education = "Mr. Fun";
	var Speech = "Mr. DDDDDDD";
	var Religion = "Mr. Hero"; 
	document.getElementsByClassName("Math").innerHTML = Math;
	document.getElementsByClassName("French").innerHTML = French;
	document.getElementsByClassName("Speech").innerHTML = Speech;
	document.getElementsByClassName("Theater-Arts").innerHTML = Theater-Arts;
	document.getElementsByClassName("Computer-Programing").innerHTML = Computer-Programing;
	document.getElementsByClassName("English").innerHTML = English;
	document.getElementsByClassName("History").innerHTML = History;
	document.getElementsByClassName("Advisors").innerHTML = Advisors;
	document.getElementsByClassName("Physical-Education").innerHTML = Physical-Education;
	document.getElementsByClassName("Religion").innerHTML = Religion;
			
	Change Picture As Scroll Down
			
	window.addEventListener("scroll", TheoTheFunction);
	function TheoTheFunction() {
		var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
		while (BigMommy = 1) {
			if (scrollpercent > 0) {
				document.getElementbyId("SayIt").innerHTML = "Click Here To Search";
			}else{
				document.getElementbyId("SayIt").innerHTML = "Scroll Down";
			}
		}
	}
	var ThatsHowTheWeekendGoes =asdf*/