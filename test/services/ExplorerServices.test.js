const Reader = require('./../../lib/utils/reader')

describe("Pruebas de unidad de la clase ExplorersServices: ", () =>{

    test ("Prueba 1: Creacion de clases estaticas: ", () => {
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
})