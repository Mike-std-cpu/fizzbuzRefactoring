const Reader = require("./../../lib/utils/reader");
const ExplorerServices = require("./../../lib/services/ExplorerServices");
const FizzBuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        ExplorerServices.filterByMission(explorers,"node");
    }
}