$("#edit-btn").on("click", function() {
	if ($("#form-visible").hasClass("display-none")) {
		$("#form-visible").removeClass("display-none");
	}
	else {
		$("#form-visible").addClass("display-none");
	}
})

let colorList = document.querySelectorAll(".lyric-color");
for ( let i = 0; i < colorList.length; i++) {
	colorList[i].onclick = function() {
		for ( let i = 0; i < colorList.length; i++) {
			colorList[i].classList.remove("selected");
		}
		colorList[i].classList.add("selected");
		console.log(colorList[i]);

		document.querySelector("#lyric-preview").classList.remove("black");
		document.querySelector("#lyric-preview").classList.remove("blue");
		document.querySelector("#lyric-preview").classList.remove("green");
		document.querySelector("#lyric-preview").classList.remove("red");
		document.querySelector("#lyric-preview").classList.remove("yellow");
		document.querySelector("#lyric-preview").classList.remove("orange");


		if (colorList[i] == colorList[0]) {
			document.querySelector("#lyric-preview").classList.add("black");
		}
		if (colorList[i] == colorList[1]) {
			document.querySelector("#lyric-preview").classList.add("blue");
		}
		if (colorList[i] == colorList[2]) {
			document.querySelector("#lyric-preview").classList.add("green");
		}
		if (colorList[i] == colorList[3]) {
			document.querySelector("#lyric-preview").classList.add("red");
		}
		if (colorList[i] == colorList[4]) {
			document.querySelector("#lyric-preview").classList.add("yellow");
		}
		if (colorList[i] == colorList[5]) {
			document.querySelector("#lyric-preview").classList.add("orange");
		}
	}
}

document.querySelector("#lyric-font").onchange = function() {
	console.log(document.querySelector("#lyric-font").value);
	document.querySelector("#lyric-preview").classList.remove("arial");
	document.querySelector("#lyric-preview").classList.remove("times-new-roman");
	document.querySelector("#lyric-preview").classList.remove("verdana");
	document.querySelector("#lyric-preview").classList.remove("monospace");
	document.querySelector("#lyric-preview").classList.remove("roboto");
	if (document.querySelector("#lyric-font").value == "Arial") {
		document.querySelector("#lyric-preview").classList.add("arial");
	}
	else if (document.querySelector("#lyric-font").value == "Times New Roman") {
		document.querySelector("#lyric-preview").classList.add("times-new-roman");
	}
	else if (document.querySelector("#lyric-font").value == "Verdana") {
		document.querySelector("#lyric-preview").classList.add("verdana");
	}
	else if (document.querySelector("#lyric-font").value == "Monospace") {
		document.querySelector("#lyric-preview").classList.add("monospace");
	}
	else if (document.querySelector("#lyric-font").value == "Roboto") {
		document.querySelector("#lyric-preview").classList.add("roboto");
	}
}

document.querySelector("#lyric-font-size").onchange = function() {
	console.log(document.querySelector("#lyric-font-size").value);
	document.querySelector("#lyric-preview").classList.remove("font-12");
	document.querySelector("#lyric-preview").classList.remove("font-15");
	document.querySelector("#lyric-preview").classList.remove("font-18");
	document.querySelector("#lyric-preview").classList.remove("font-21");
	document.querySelector("#lyric-preview").classList.remove("font-24");
	document.querySelector("#lyric-preview").classList.remove("font-27");
	document.querySelector("#lyric-preview").classList.remove("font-30");
	document.querySelector("#lyric-preview").classList.remove("font-33");
	document.querySelector("#lyric-preview").classList.remove("font-36");
	
	if (document.querySelector("#lyric-font-size").value == "12") {
		document.querySelector("#lyric-preview").classList.add("font-12");
	}
	else if (document.querySelector("#lyric-font-size").value == "15") {
		document.querySelector("#lyric-preview").classList.add("font-15");
	}
	else if (document.querySelector("#lyric-font-size").value == "18") {
		document.querySelector("#lyric-preview").classList.add("font-18");
	}
	else if (document.querySelector("#lyric-font-size").value == "21") {
		document.querySelector("#lyric-preview").classList.add("font-21");
	}
	else if (document.querySelector("#lyric-font-size").value == "24") {
		document.querySelector("#lyric-preview").classList.add("font-24");
	}
	else if (document.querySelector("#lyric-font-size").value == "27") {
		document.querySelector("#lyric-preview").classList.add("font-27");
	}
	else if (document.querySelector("#lyric-font-size").value == "30") {
		document.querySelector("#lyric-preview").classList.add("font-30");
	}
	else if (document.querySelector("#lyric-font-size").value == "33") {
		document.querySelector("#lyric-preview").classList.add("font-33");
	}
	else if (document.querySelector("#lyric-font-size").value == "36") {
		document.querySelector("#lyric-preview").classList.add("font-36");
	}
}