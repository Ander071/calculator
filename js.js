"use strict";
let actions = document.querySelector(".actions")
let numbers = document.querySelector(".numbers");
let input = document.querySelector(".input input");
let simvol = document.querySelector(".simvol");
let operations = document.querySelector(".operations");
let check_tochka;

numbers.onclick = function(event){
	let target = event.target;
	let last_simvol;
	if (target.tagName != "BUTTON") {
		return;
	}

	
	if (target.innerHTML == ".") {
		last_simvol =  input.value.slice(-1);
		if ((last_simvol == "+") || (last_simvol == "-") || (last_simvol == "*") || (last_simvol == "/")) {
			input.value += "0";
		}
		target.disabled = true; 
		
	}


	
	if (target.innerHTML == "0") {
		if (input.value == "0") {
			return;
		}
	}
	if (input.value == "0") {
		if (target.innerHTML != ".") {
			input.value = "";
		}
	}

	
		

		input.value += target.innerHTML;

// if (input.value.slice(-1) == "+") {
// 			simvol.disabled = true;
// }
		

	
	}

actions.onclick = function(event){
	let target = event.target;
	let last_simvol;
	let stroka;
	if (target.tagName != "BUTTON") {
		return;
	}
	
	if (target.innerHTML == "\u2190") {
		if (input.value.slice(-1) == ".") {
			simvol.disabled = false;
		}
		last_simvol = input.value.slice(-1);

		if ((last_simvol =="+") || (last_simvol == "-") || (last_simvol == "*") || (last_simvol == "/"))  {
			stroka = input.value.slice(0,-1);
			check_tochka = stroka.match(/[+*-/]/g);
			if (check_tochka[check_tochka.length-1].includes(".")) {
				simvol.disabled = true;
			}
		}

		input.value = input.value.slice(0,-1);

		if (input.value == "") {
			input.value = "0";
		}

	}

	if (target.innerHTML == "CE") {
		input.value = "0";
		simvol.disabled = false;
	}
	if (target.innerHTML == "="){
		input.value = eval(input.value);
	}

};

operations.onclick = function(event){
	let target = event.target;
	let last_simvol;

	if (target.tagName != "BUTTON") {
		return;
	}
	if (input.value.slice(-1) == ".") {
		input.value = input.value.slice(0,-1);
	}
	last_simvol = input.value.slice(-1);
	if ((last_simvol == "+") || (last_simvol == "-") || (last_simvol == "*") || (last_simvol == "/")) {
		input.value = input.value.slice(0,-1);
		

		
	}
	// if ((last_simvol == "+") || (last_simvol == "-") || (last_simvol == "*") || (last_simvol == ":")) {}
	input.value += target.innerHTML;
	simvol.disabled = false;
};
 







/*
	необходимо сделать:

  решить проблемы с точкой
*/
