const Reader = require("./../../lib/utils/reader");

describe("Pruebas de unidad de la clase Fizz Buzz Services:",() => {
   
    test ("Prueba 1: Validación de FIZZBUZZ: ", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        
        class FizzBuzzService{
            static applyValidationExplorer(explorer){
                const validation = {};
                validation[[true, true]] = "FizzBuzz";
                validation[[true, false]] = "Fizz";
                validation[[false, true]] = "Buzz";
                validation[[false, false]] = false;
                const score = 15;

                const fb_validation = validation[[score % 3 == 0, score % 5 == 0]];
                if(fb_validation){
                    fb_validation;
                }else{
                    score;
                }
            }
        }

        const explorer1 = {name: "Explorer1", score: 1};
        FizzBuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1}
        //expect(FizzBuzzService.applyValidationInExplorer(explorer1)).not.toBe(null);

    });
});