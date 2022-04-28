const Reader = require('./../../lib/utils/reader');

describe("Pruebas de unidad de la clase ExplorersServices: ", () =>{

    test ("Prueba 1: Creacion de clases estaticas y metodo filterByMission: ", () => {
        const explorers = Reader.readJsonFile("explorers.json"); // En la clase lo importaremos
        class ExplorerServices{
            //static son metodos de las clases, no para instanicias
            static filterByMission(explorers, mission){
              const explorersByMission = explorers.filter((explorer) => explorer.mission == mission)
            }
        }
        const myListExplorers = ExplorerServices.filterByMission(explorers,"node")
        expect(myListExplorers).not.toBe(null);
    })  

    test ("Prueba 2: Metodo getAmountOfExplorersByMission:", () =>{
        const explorers = Reader.readJsonFile("explorers.json"); // En la clase lo importaremos
        class ExplorerServices{
            static getAmountOfExplorersByMission(explorers, mission){
                const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
                return explorersInNode.length
            }
        }

       const myNumberExplorers =ExplorerServices.getAmountOfExplorersByMission(explorers, "node");

    expect(myNumberExplorers).toBe(10);
    })
})