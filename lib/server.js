const express = require("express");
const ExplorerConotroller = require("../././lib/controllers/ExplorerController");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hola a todos!");
});
app.get("/v1/explorers/:mission", (req, res) =>{
    const mission = req.params.mission;
    const explorersByMission = ExplorerConotroller.getExplorerByMission(mission);
    res.json(explorersByMission);
});

app.listen(port, () =>{ // Aqui se inicializa la app
    console.log(`Server listo: ${port}`);
});