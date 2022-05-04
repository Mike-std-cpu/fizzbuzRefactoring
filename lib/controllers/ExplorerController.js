const Reader = require("./../../lib/utils/reader");
const ExplorerServices = require("./../../lib/services/ExplorerServices");
const FizzBuzzService = require("./../../lib/services/FizzbuzzService");

class ExplorerController{
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        ExplorerServices.filterByMission(explorers, mission);
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getExplorersUsernamesByMission(explorers, mission);
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        return ExplorerServices.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyValidationInNumber(number){
        return FizzBuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;