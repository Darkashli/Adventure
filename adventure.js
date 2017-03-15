function goto_level_1() { 
	var Display = document.getElementById('monitor');
	Display.src = '2.png';

	var Button1 = document.getElementById('1');
	Button1.setAttribute("onClick", "javascript:goto_level_2();");
	Button1.innerHTML = "Goto level 2";

	var Button2 = document.getElementById('2');
	Button2.style.display = "block";
	Button2.setAttribute("onClick", "javascript:goto_level_3();");
	Button2.innerHTML = "Goto level 3";

}

function goto_level_2() { 
	var Display = document.getElementById('monitor');
	Display.src = '3.png';
	
	var Button2 = document.getElementById('2');
	Button2.setAttribute("onClick, javascript:goto_level_1();");
	Button2.innerHTML = "Back to the previos level";

}

function goto_level_3() { 
	var Display = document.getElementById('monitor');
	Display.src = '4.png';

}