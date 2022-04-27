const Reader = require("./../../lib/utils/reader")

const explorers = Reader.readJsonFile("explorers.json");

console.log(explorers);