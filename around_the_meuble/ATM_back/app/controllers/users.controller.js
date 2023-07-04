const db = require("../models");
const Users = db.users;

// async function emailExists() {
//   let result = await Users.findOne({ 
//     where: { email: 'email'}
//   })
// };

exports.create = (req, res) => {
  // if (emailExists){
  //   res.status(409).send({
  //     message: 'Email already registered'
  //   })
  //   return
  // } else 
  if (!req.body.email) {
    res.status(400).send({
      message: "Entrez un Email",
    });
    return;
  };
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
