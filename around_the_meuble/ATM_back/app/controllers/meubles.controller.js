const db = require("../models");
const Meubles = db.meubles;

exports.create = (req, res) => {
    if (!req.body.type){
        res.status(400).send({
            message: "Il faut un type pour le meuble"
        });
        return;
    }

// Créer un meuble dans la base de données

const meuble= {
    type: req.body.type,
    nom: req.body.nom,
    photo: req.body.photo,
    description: req.body.description,
    prix: req.body.prix,
    couleur: req.body.couleur,
    matiere: req.body.matiere,
    dimensions: req.body.dimensions,
    stock: req.body.stock,
    
}

Meubles.create(meuble)
.then(data =>{
    res.send(data);
})
.catch(err=>{
    res.status(500).send({
       message:
        err.message || "Une erreur a été détectée" 
    });
});
};


