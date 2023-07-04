const db = require("../models");
const UserFav = db.UserFav;


//Ajouter un like dans la base de données
exports.create = (req, res) => {
    if (!req.body.card.id) {
      res.status(400).send({
        message: "Il faut un like pour le meuble",
      });
      return;
    }

const userFav = {
    meuble_id: req.body.card.id,
    user_id : req.body.session_id,
  };

  UserFav.create(userFav)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Une erreur a été détectée",
      });
    });

}

// SUPPRIMER un like de la base de données
exports.deleteFav = async (req, res) => {

    const id = req.query.id
    
    let condition = id ? { id: { [Op.eq]: `%${id}%` } } : null;
    
    UserFav.destroy({where: condition})
      .then((data) => {
        res.send(data);
        res.json({ message: 'Le like à bien été supprimé' });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Une erreur a été détectée",
        });
      });
    }