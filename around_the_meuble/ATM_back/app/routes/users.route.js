module.exports = app => {
    const users = require("../controllers/users.controller.js");

    let router = require("express").Router();

    // Une route pour créer un nouveau user 
    router.post("/", users.create);

    // router.post("/login", users.getToken)
    // On détermine l'URL pour notre API 
    app.use('/api/users', router);
}