module.exports = (app) => {
  const meubles = require("../controllers/meubles.controller.js");

  let router = require("express").Router();

  // Une route pour créer un nouveau meuble
  router.post("/", meubles.create);

  // Une route pour obtenir toutes les données des meubles par type
  router.get("/", meubles.findAll);

  // Une route pour obtenir l'intégralité de la table Meubles
  router.get("/allmeubles", meubles.findAllMeubles);

  // On détermine l'URL pour notre API
  app.use("/api/meubles", router);
};
