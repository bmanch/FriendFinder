var path = require("path");

module.exports = function(app) {
	app.get("/survey", function(req, res) {
		console.log("inside get... survey");
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	app.use(function(req, res) {
		console.log("inside use...");
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};