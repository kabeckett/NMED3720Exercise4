window.onload = init;

function init() {

	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://picsum.photos/list", true);

	xhr.send(null);

	xhr.onload = function() {

		if (xhr.status == 200) {

			var picsum = JSON.parse(xhr.responseText)
			console.log(picsum);

			document.getElementById("gallery").setAttribute("class", "grid-wrap");

			var imageString = "";

			for (var randSelect = 0; randSelect < 10; randSelect++) {

				// random number generator code from https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array

				var randImg = Math.floor(Math.random() * picsum.length);
				
				imageString += "<div class='grid-item'><a href=" + picsum[randImg].post_url + "><img src='https://picsum.photos/200/300?image=" + picsum[randImg].id + "'></a><p><a href=" + picsum[randImg].author_url + ">" + picsum[randImg].author + "</a></p></div>";
			}

			

			// var imageString = "";

			// for (var x = 500; x < 550; x++) {

			// 	imageString += "<a href=" + picsum[x].post_url + "><img src='https://picsum.photos/200/300?image=" + picsum[x].id + "'></a><p><a href=" + picsum[x].author_url + ">" + picsum[x].author + "</a></p>";
			// } // end for statement

				document.getElementById("gallery").innerHTML = imageString;

		} // end if stmt

	} // end onload function

} // end init function