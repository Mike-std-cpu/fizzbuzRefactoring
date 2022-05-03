const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hola a todos!")
});

app.listen(port, () =>{ // Aqui se inicializa la app
    console.log(`Server listo: ${port}`);
});