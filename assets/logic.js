//test that everything loaded
$(document).ready(function(){
	console.log("MEOW!");
});

//get a random cat gif from Giphy
//Please don't steal my API key!

function getCatGif(){
	var queryURL="https://api.giphy.com/v1/gifs/random?tag=cat&api_key=479dcfc1a5af4da3b18dc91c86802588&limit=1";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){

		var results = response.data;
		console.log(results);

		var catDiv = $('<div class = "cat">');

		var catGif = $('<img id="cattoGif" class="gif">');
		catGif.attr("src", results.image_url);

		$("#cats").append(catGif);

		$("catButton").on("click", function(){
			event.preventDefault();
			catGif = $(this);
			console.log("ok!");
		});


	});
}

getCatGif();
