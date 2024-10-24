module.exports = (app) => {
  const tutorials = require("../controllers/tutorial.controller");

  var router = require("express").Router();

  //create a new tutorial
  router.post("/", tutorials.create);

  //retrieve all tutorials
  router.get("/", tutorials.findAll);

  //retrieve all published tutorials
  router.get("/published", tutorials.findAllPublished);

  //retrieve a single tutorial with id
  router.get(":/id", tutorials.findOne);

  //delete a tutorial with id
  router.delete(":/id", tutorials.delete);

  //create a new tutorial
  router.delete("/", tutorials.deleteAll);

  app.use("/api/tutorials", router);
};
