var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		console.log("inside");
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		var intScores = [];
		var comparisons = [];
		var totalDifference = 0;
		for (var i = 0; i < req.body.scores.length; i++) {
			var integer = parseInt(req.body.scores[i]);
			intScores.push(integer);
		}
		req.body.scores = intScores;

		friends.forEach(check);

		function check(obj) {
			for (var i = 0; i < intScores.length; i++) {
				totalDifference += Math.abs(intScores[i] - obj.scores[i]);
			}
			comparisons.push(totalDifference);
			totalDifference = 0;
		}

		console.log(comparisons);

		var min = Math.min.apply(null, comparisons);
		console.log(min);
		var index = comparisons.indexOf(min);
		console.log(index);
		res.json(friends[index]);
		friends.push(req.body);
	});
};