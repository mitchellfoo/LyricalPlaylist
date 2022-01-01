function ajax(endpoint, returnFunction) {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", endpoint);
	xhr.send();
	
	xhr.onreadystatechange = function() {
		// console.log(this);


		if(xhr.readyState == this.DONE) {
			if(xhr.status == 200) {

				returnFunction(xhr.responseText);
			}
			else {
				// There was an error (not 200)
				alert("AJAX errror");
				console.log(xhr.status);
			}
		}
	}
}

function displayResults(resultObject) {
	$("ol").empty();
	$("#check-lyrics").empty();

	// Convert JSON into JS objects
	resultObject = JSON.parse(resultObject);
	console.log(resultObject);

	let counter = 0;

	for (let i = 0; i < resultObject.data.length; i++) {
		console.log(resultObject.data[i].title + " by " + resultObject.data[i].artist.name);
		$("ol").append("<li>"+resultObject.data[i].title + " by " + resultObject.data[i].artist.name + 
			'<div class="open-btn"><a href="#" role="button" id="check-lyrics-btn-' + counter +'">Check Lyrics</a></div></li>');
	
		$("ol").on("click", "#check-lyrics-btn-" + counter, function(event) {
			event.preventDefault();
			$("#check-lyrics").empty();
			$("open-btn").empty();


			let title = resultObject.data[i].title;
			let artist = resultObject.data[i].artist.name;

			console.log(title + " by " + artist);

			// Print song and lyrics
			getLyrics(title, artist);
		});
		counter++;
	}
}

document.querySelector("#search-form").onsubmit = function() {

	event.preventDefault();
	let searchInput = document.querySelector ("#search-id").value.trim();
	console.log(searchInput);

	let endpoint = "https://api.lyrics.ovh/suggest/" + searchInput;

	// Call the ajax function
	ajax(endpoint, displayResults);

	console.log("at the end of onsubmit");
}

function getLyrics(title, artist) {
	$.ajax({
		method: "GET",
		url: "https://api.lyrics.ovh/v1/" + artist + "/" + title,
	})
	.done(function(results){
		returnLyrics = results.lyrics;
		console.log(returnLyrics);
		$("#check-lyrics").empty();
		$("#check-lyrics").html("<i>" + title + "</i><br /> by " +  artist + "<br /><br />" + returnLyrics.replace(/\n/g, '<br />') + 
			'<br /><br /><div><a href="lp_edit.html" role="button" id="check-lyrics-btn-">Add Lyrics</a></div>');
	})
	.fail(function(){
		console.log("ERROR: Song lyrics unavailable");
	})
	.always(function(){
		if ($('#check-lyrics').is(':empty')){
			$("#check-lyrics").html('<div class="text-danger">Song Lyrics Not Available</div>');
		}
	});

}




