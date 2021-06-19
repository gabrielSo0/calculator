// class calculator {
//     constructor(number) {
//         this.number = number;
//     }

//     calculateSum() {
//         return this.number + this.number 
//     }

// }

function Calculator() {
    this.numbersButtons = document.querySelectorAll(".numbers-button");
    this.operationsButtons = document.querySelectorAll(".operation-button");
    this.display = document.querySelector(".display-input");
    
    this.calculateSum = function(arrayOfValues) {
        if(arrayOfValues.length == 1)
            return 0;

        let total = 0;
        arrayOfValues.forEach((value, index, array) => {
            total += parseFloat(value);
        })

        return total;
    }

    this.calculateSubtraction = function(arrayOfValues) {
        if(arrayOfValues.length == 1)
            return 0;

        let diferenca = 0;
        let subtraendo = 0;
        let minuendo = 0;
        let primeiroValor = false;
        arrayOfValues.forEach((value, index, array) => {
            
            if(!primeiroValor) {
                minuendo = parseFloat(value);
                primeiroValor = true;
            } else {
                subtraendo += value;
            }

        });

        diferenca = minuendo - subtraendo;

        return diferenca;
    }

    this.calculateMultiplication = function(arrayOfValues) {
        let product = 1;
        arrayOfValues.forEach((value, index, array) => {
            product *= parseFloat(value);
        });

        return product;
    }

    this.calculateDivision = function(arrayOfValues) {
        let dividendo = 0;
        let divisor = 0;
        let primeiroValor = false;
        arrayOfValues.forEach((value, index, array) => {
            if(!primeiroValor) {
                dividendo = parseFloat(value);
                primeiroValor = true;
            } else {
                divisor = parseFloat(value);
                dividendo = dividendo / divisor; 
            }
            
        });

        return divisor == 0 ? "Infinity" : dividendo;
        
    }

    this.clearDisplay = function() {
        this.display.value = "";
    }

}


function resetOperationsVariables () {
    sum = false;
    sub = false;
    mult = false;
    div = false;
}

const calculator = new Calculator();
let arrayOfValues = [];
let valueAcumulated = "";
let result = 0;
let sum = false;
let sub = false;
let mult = false;
let div = false;
let operation = "";
let resultado = 0;


calculator.numbersButtons.forEach((buttons, index, array) => {

    buttons.addEventListener("click", (e) => {
        if(buttons.innerHTML == "c") {
            calculator.clearDisplay();
            arrayOfValues = [];
            valueAcumulated = "";
        } else if(buttons.innerHTML == "=") {
            if(sum) {
                if(valueAcumulated == "")
                    return;
                arrayOfValues.push(valueAcumulated);
                result = calculator.calculateSum(arrayOfValues);
                calculator.display.value = result;
                resetOperationsVariables();
            }
            
            if(sub) {
                if(valueAcumulated == "")
                    return;
                arrayOfValues.push(valueAcumulated);
                result = calculator.calculateSubtraction(arrayOfValues);
                calculator.display.value = result;
                resetOperationsVariables();
            }

            if(mult) {
                if(valueAcumulated == "")
                    return;
                arrayOfValues.push(valueAcumulated);
                result = calculator.calculateMultiplication(arrayOfValues);
                calculator.display.value = result;
                resetOperationsVariables();
            }

            if(div) {
                if(valueAcumulated == "")
                    return;
                arrayOfValues.push(valueAcumulated);
                result = calculator.calculateDivision(arrayOfValues);
                calculator.display.value = result;
                resetOperationsVariables();
            }

        } else {
            calculator.display.value += buttons.innerHTML;
            valueAcumulated += buttons.innerHTML;
        }
        
    })
})


calculator.operationsButtons.forEach((operations, index, array) => {
    operations.addEventListener("click", (e) => {

        

        if(operations.innerHTML == "+") {

            calculator.display.value += operations.innerHTML;
            arrayOfValues.push(valueAcumulated);
            resultado = calculator.calculateSum(arrayOfValues);
            valueAcumulated = "";


            if(sub) {
                resultado = calculator.calculateSubtraction(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(mult) {
                resultado = calculator.calculateMultiplication(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(div) {
                resultado = calculator.calculateDivision(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            resetOperationsVariables();
            sum = true;

            if(resultado > 0) {
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

        } else if (operations.innerHTML == "-") {
            
            calculator.display.value += operations.innerHTML;
            arrayOfValues.push(valueAcumulated);
            resultado = calculator.calculateSubtraction(arrayOfValues);
            valueAcumulated = "";

            if(sum) {
                resultado = calculator.calculateSum(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(mult) {
                resultado = calculator.calculateMultiplication(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(div) {
                resultado = calculator.calculateDivision(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(resultado > 0) {
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            resetOperationsVariables();
            sub = true;
            
            
        } else if (operations.innerHTML == "x") {
            
            calculator.display.value += operations.innerHTML;
            arrayOfValues.push(valueAcumulated);
            resultado = calculator.calculateMultiplication(arrayOfValues);
            valueAcumulated = "";

            if(sum) {
                resultado = calculator.calculateSum(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(sub) {
                resultado = calculator.calculateSubtraction(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(div) {
                resultado = calculator.calculateDivision(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(resultado > 0) {
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            resetOperationsVariables();
            mult = true;

        } else {
            calculator.display.value += operations.innerHTML;
            arrayOfValues.push(valueAcumulated);
            resultado = calculator.calculateDivision(arrayOfValues);
            valueAcumulated = "";

            if(sum) {
                resultado = calculator.calculateSum(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(sub) {
                resultado = calculator.calculateSubtraction(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(mult) {
                resultado = calculator.calculateMultiplication(arrayOfValues);
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            if(resultado > 0) {
                arrayOfValues = [];
                arrayOfValues.push(resultado);
            }

            resetOperationsVariables();
            div = true;
        }
    })
});
