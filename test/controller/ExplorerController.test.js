const Reader = require("./../../lib/utils/reader");
const ExplorerServices = require("./../../lib/services/ExplorerServices");
const FizzBuzzService = require("./../../lib/services/FizzbuzzService");
const { TestScheduler } = require("jest");

describe("Pruebas de la clase EXPLORER CONTROLLER: ", () => {
    test("1.- Pruebas de la clase ExplorerConotroller metodo static: ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const myListExplorers = ExplorerServices.filterByMission(explorers,"node");
        expect(myListExplorers).not.toBe(null);
    });

    test("2.- Pruebas de metodos de la clase ExplorerServices: ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        const myListExplorers = ExplorerServices.filterByMission(explorers,"node");
        const myNumberExplorers =ExplorerServices.getAmountOfExplorersByMission(explorers, "node");
        const number = ExplorerServices.getExplorersUsernamesByMission(explorers,"node").length;
        

        expect(myListExplorers).not.toBe(null);
        expect(myNumberExplorers).toBe(10);
        expect(number).toBe(15);
    });
});