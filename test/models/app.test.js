//LIGAMOS LA CLASE
const fs = require('./../../app/models/app')

describe("Prueba de unidad de proyecto: ", () =>{

    test("Pureba 1 : verificar codigo de creacion de explorers, que no sea null", () =>{
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
        expect(explorers).not.toBe(null);
    })

    test("Prueba2 : De tamaño de lista de objetos explorers: ", () => {
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
        const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");
        expect(explorersInNode.length).toBe(10);
    })

    test("Prueba3: Nombres correctos de los explorers en node: ",() => {
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        expect(usernamesInNode[0]).toBe("ajolonauta1");
        expect(usernamesInNode[9]).toBe("ajolonauta10");
    })
})