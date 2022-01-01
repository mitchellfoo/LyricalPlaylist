$("#todo-form").on("submit", function(event) {
	console.log("playlist added");
	event.preventDefault();
	let todoInput = $("#todo").val();
	let dateInput = "2019-12-09 (placeholder)";
	$("ul").append('<li><h4><a class="playlist-name" href="lp_edit.html">' + todoInput + '</a></h4><div class="playlist-date">' + dateInput +'</div></li><br/>');
	this.reset();
});

$("#todo-form").on("click", "i", function(event) {
	console.log("playlist added");
	let todoInput = $("#todo").val();
	let dateInput = "2019-12-09 (placeholder)";
	$("ul").append('<li><h4><a class="playlist-name" href="lp_edit.html">' + todoInput + '</a></h4><div class="playlist-date">' + dateInput +'</div></li><br/>');
	$("#todo-form").trigger("reset");
});