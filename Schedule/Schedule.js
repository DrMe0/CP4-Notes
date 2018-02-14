var BigMommy = false;
function Jiopoi(){
	if(BigMommy)
	{
		Happy2();
	}
	else{
		DearHearts();

	}
	
}
var F = "You do realize that you are clicking in the wrong place right now? If you want to see more information about a class you can just go ask me! <br> If your that desperate you can just go use the <br> search-bar below."
var M = "Sorry folks, your going to have to refresh the page before you can search again!"
function Happy() {
	 document.getElementById("Table1").innerHTML = F
}
function Happy2() {
	 document.getElementById("Table1").innerHTML = M
}
var Hananna = "Sorry Folks, if you want to search again, you got to refresh the page!"
function Kilooo() {
	document.getElementById("Table2").innerHTML = Hananna
}
function DearHearts() {
	/*switch (BigMommy) { 
		case 1 : */
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
				case "Religion":
					var Go = "Religion";
				break;
			}
			var LetsGo = document.getElementsByClassName(Go);
			var i;
			for (i = 0; i < LetsGo.length; i++) {
			LetsGo[i].style.backgroundColor = "yellow";
			var BigMommy = true;
			}
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