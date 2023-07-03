const db = require("../models");
const Users = db.users;

exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Entrez un Email",
    });
    return;
  }
  //Creer un USER dans la base de données

  const user = {
    email: req.body.email,
    password: req.body.password,
    nom: req.body.nom,
    prenom: req.body.prenom,
  };

  Users.create(user)
    .then((data) => {
      res.send(data);
    })

    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été detectée",
      });
    });
};
