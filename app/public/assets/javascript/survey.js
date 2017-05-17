$('.choice').on('click', function(event) {
	event.preventDefault();
	var rating = $(this).text();
   	$(this).parent().parent().children().first().text(rating);
});

$('#submit').on('click', function(event) {
    event.preventDefault();
    var scores = [];
    for (var i = 1; i < 11; i++) {
	    var score = $('#q' + i).text().charAt(0);
	    if (score === "S") {
	    	score = "3";
	    }
	    scores.push(score);
	}

	var name = "";
	var photo = "";

	if ($('#name').val().trim() === "") {
		name = "Nobody";
	} else {
		name = $('#name').val().trim();
	}

	if ($('#photo').val().trim() === "") {
		photo = "https://static.pexels.com/photos/28753/pexels-photo-28753.jpg";
	} else {
		photo = $('#photo').val().trim();
	}

    var newFriend = {
	    name: name,
	    photo: photo,
	    scores: scores
	}
	    	
	$.post("/api/friends", newFriend, function(data) {
	    $('#image').html('<h5><strong>' + data.name + '</strong></h5><hr>' + '<img src=' + data.photo + ' alt=' + data.name + 'width=350 height=350>');

		$('#name').val("");
		$('#photo').val("");
		for (var i = 1; i < 11; i++) {
		    $('#q' + i).text("Select an Option");
		}
	});
});