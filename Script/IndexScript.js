function changeTabs(evt, tab) {
	var tablinks;
	tablinks = document.getElementsByClassName("tablinks active");
	tablinks[0].className ="tablinks";
	tabContent = document.getElementById("tabcontent");
	tabContent.src = tab + ".html";
	evt.currentTarget.className += " active";
	
} 

function rollOut(evt) {
	
	
}	