const Reader = require('./../../lib/utils/reader');
const ExplorerServices = require('./../../lib/services/ExplorerServices')

const explorers = Reader.readJsonFile("explorers.json"); //Importe de objetos explorers.json
console.log(explorers)
//console.log(ExplorerServices.filterByMission(explorers,"node"));