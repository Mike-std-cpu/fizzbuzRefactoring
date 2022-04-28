const fs = require("fs");
const Reader = require('./../../lib/utils/reader');

class ExplorerServices{
    //static son metodos de las clases, no para instanicias
    static filterByMission(explorers, mission){
      const explorersByMission = explorers.filter((explorer) => explorer.mission == mission)
      return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
      const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername == mission);
      return usernamesInNode;
    }



}
console.log(ExplorerServices.filterByMission(explorers,"node"))
module.exports = ExplorerServices;