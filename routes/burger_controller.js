var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.burger.findAll({
			include: [db.customer]
		}).then(function(data) {
			res.render("index", {burgers: data});
		})
	});

	

	app.put("/:id", function(req, res) {
			db.burger.update(
				{
					devoured: req.body.boolean === "true"
				},
				{
					where: {
						id: req.params.id
					}
				}
			).then(function(data) {
				res.redirect("/");
			});
	});
	

	app.delete("/:id", function(req, res) {
		db.burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.redirect("/");
		});
	});
};
