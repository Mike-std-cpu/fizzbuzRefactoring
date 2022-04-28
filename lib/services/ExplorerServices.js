const fs = require("fs");

class ExplorerServices{
    //static son metodos de las clases, no para instanicias
    static filterByMission(explorers, mission){
      const explorersByMission = explorers.filter((explorer) => explorer.mission == mission)
    }

    static getAmountOfExplorersByMission(explorers, mission){

    }

    static getExplorersUsernamesByMission(explorers, mission){

    }
}
module.exports = ExplorerServices;