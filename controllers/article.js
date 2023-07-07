
const prueba = (req, res) => {
    return res.status(200).json({
        mensaje: "Soy una accion de prieba en mi controlador de articulos"
    });
};

const curso = (req, res) => {
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
}

module.exports = {
    prueba,
    curso
};