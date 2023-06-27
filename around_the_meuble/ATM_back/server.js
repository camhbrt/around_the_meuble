const express = require('express');
const cors = require('cors');

const app = express();

// Using port 5173 for connection
let corsOptions = {
    origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));

// Post data in JSON format.
app.use(express.json());

// Post data in URLs as strings or arrays.
app.use(express.urlencoded({extended: true})); 

app.get('/', (request, resolve) => {
    resolve.json(({message : 'Welcome to AROUND THE MEUBLE'}))
})

const PORT = 5173;
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`)
});