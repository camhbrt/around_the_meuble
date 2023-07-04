const db = require("../models");
const Meubles = db.meubles;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.type) {
    res.status(400).send({
      message: "Il faut un type pour le meuble",
    });
    return;
  }

  // Créer un meuble dans la base de données

  const meuble = {
    type: req.body.type,
    nom: req.body.nom,
    photo: req.body.photo,
    description: req.body.description,
    prix: req.body.prix,
    couleur: req.body.couleur,
    matiere: req.body.matiere,
    dimensions: req.body.dimensions,
    stock: req.body.stock,
    status: "Article à valider",
  };

  Meubles.create(meuble)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};

//Création de la fonction qui permet de chercher les meubles par leurs types
exports.findAllByType = (req, res) => {
  const type = req.query.type;
  let condition = type ? { type: { [Op.like]: `%${type}%` } } : null;

  Meubles.findAllByType({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};

//Création de la fonction qui permet de chercher les meubles par leurs IDs
exports.findAllById = (req, res) => {
  const id = req.query.id;
  let condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Meubles.findAllById({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};

//Création de la fonction qui permet de chercher TOUT les meubles
exports.findAll = (req, res) => {

  Meubles.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });
};


//Création de la fonction qui permet de modifier un meuble
exports.update = (req, res) => {
  const id = req.query.id;
  let condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Meubles.update()
}

 // exports.updateMeuble = (req, res) => {
 //
 //   const id = req.query.id;
 //   const status = req.body;
 //
 // const meuble = await Meubles.findByPk(id);
 // if (!meuble) {
 // return res.status(404).json({ message: 'Meuble introuvable.' });
 //}
 //
 // meuble.status = status;
 //