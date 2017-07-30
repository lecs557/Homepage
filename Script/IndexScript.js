var id;	
var rolleOut ;
var wid;

function init(){
	rolleOut = document.getElementById("rollOut");
}


function changeTabs(evt, tab) {
	var tablinks, tabContent;
	tablinks = document.getElementsByClassName("tablinks active");
	tablinks[0].className ="tablinks";
	tabContent = document.getElementById("tabcontent");
	tabContent.src = tab + ".html";
	evt.currentTarget.className += " active";
	
} 

function rollOut(evt) {
	clearInterval(id);
	rolleOut.style.width = "0px";
	rolleOut.style.left = evt*200 +"px";
	roll(false);
	
}	

function reset() {
	r = true;
	clearInterval(id);
	rolleOut.onmouseover = function(){clearInterval(id); r = false; roll(r);};
	rolleOut.onmouseout  = function(){clearInterval(id); r = true; roll(r);};
	roll(r);
}

function roll(bln) {	
	wid = parseInt(rolleOut.style.width);
	id = setInterval(frame, 1);
	function frame() {
		if (rolleOut.style.width == "0px" && bln){
			rolleOut.hidden = true; clearInterval(id);}
		else
			rolleOut.hidden = false;
		if (bln && wid > 0) {
			wid = wid-10;
			rolleOut.style.width = wid + "px";		
		} else if (wid < 500) {
			wid=wid+10;
			rolleOut.style.width = wid + "px";
		}
	}
	
}