const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
    res.sendFile((__dirname + "./views/home.html"))
});

app.get("*", (req, res) => {
    res.send("Ruta registrada, hemos localizado la dirección de su computadora");
})

app.listen(3000, () => console.log("El servidor está corriendo"));