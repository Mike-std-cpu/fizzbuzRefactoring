const Reader = require("./../../lib/utils/reader");
const FizzBuzzService = require("./../../lib/services/FizzbuzzService");


describe("Pruebas de unidad de la clase Fizz Buzz Services:",() => {
   
    test ("Prueba 1: Validación de SCORE = TRICK: ", () => {
        const explorer = {name: "Explorer1", score: 1};
        FizzBuzzService.applyValidationExplorer(explorer);
        expect(explorer.trick).not.toBe(null);
        expect(explorer.trick).toBe(1);
    });

    test("Prueba 2: Validación de BUZZ | FIZZ :", () => {
        const explorer3 = {name: "Explorer3", score: 3};
        FizzBuzzService.applyValidationExplorer(explorer3);
        expect(explorer3.trick).not.toBe(null);
        expect(explorer3.trick).toBe("FIZZ");

        const explorer5 = {name: "Explorer5", score: 5};
        FizzBuzzService.applyValidationExplorer(explorer5);
        expect(explorer5.trick).not.toBe(null);
        expect(explorer5.trick).toBe("BUZZ");

    });

    test("Prueba 3: Validación de FIZZBUZZ :", () => {
        const explorer15 = {name: "Explorer15", score: 15};
        FizzBuzzService.applyValidationExplorer(explorer15);
        expect(explorer15.trick).not.toBe(null);
        expect(explorer15.trick).toBe("FIZZBUZZ");
    });
});