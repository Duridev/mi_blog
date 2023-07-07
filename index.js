const { connection } = require("./database/connection");
const express = require("express");
const cors = require('cors');


//inicializar app
console.log("App de Node arrancada");

// Conectar a la base de datos
connection();

// Crear servidor de Node y puerto
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir body a objeto js
// Ejecutar un midleware: express, y el metodo: json
// Esto hace que si paso diferentes datos por peticion por POST,
//cuando los quiera usar dentro de mi ruta, tendre un objeto Js usable en mi codigo,
//no tendre que "parsearlo" luego, sino que de una, parseo en toda peticion, objeto 
//o dato que me llegue
app.use(express.json());

// Crear rutas.
const rutas_article = require("./rutas/Article")

// Cargo las rutas
app.use("/api", rutas_article)

//Rutas prueba hardcodeadas
app.get("/probando", (req, res) => {
    console.log("Se ha ejecutado el endpoint probando");

    return res.status(200).json([{
        curso: "Manster en React",
        autor: "Victor Robles WEB",
        url: "victorroblesweb.es/master-react"
    },
    {
        curso: "Manster en React",
        autor: "Victor Robles WEB",
        url: "victorroblesweb.es/master-react"
    },
    {
        curso: "Manster en React",
        autor: "Victor Robles WEB",
        url: "victorroblesweb.es/master-react"
    }
    ]);
});

app.get("/", (req, res) => {
    return res.status(200).send(
        "<h1>API REST con NodeJs</h1>"
    );
});


// Crear servidor y escuchar peticiones
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});



