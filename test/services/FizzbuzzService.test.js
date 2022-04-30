const Reader = require("./../../lib/utils/reader");
const FizzBuzzService = require('./../../lib/services/FizzbuzzService');


describe("Pruebas de unidad de la clase Fizz Buzz Services:",() => {
   
    test ("Prueba 1: Validación de FIZZBUZZ: ", () => {
        const explorer = {name: "Explorer1", score: 1};
        FizzBuzzService.applyValidationExplorer(explorer); // {name: "Explorer1", score: 1, trick: 1}
        expect(explorer.trick).not.toBe(null);
        expect(explorer.trick).toBe(1);

    });
});