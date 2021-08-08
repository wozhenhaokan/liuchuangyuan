// 适配
function recalc () {
	var  styleN = document.createElement("style");
	var width = document.documentElement.clientWidth/1920*16; 
	styleN.innerHTML = 'html{font-size:'+width+'px!important}';
	document.head.appendChild(styleN);
	// location.reload()
}
recalc ()