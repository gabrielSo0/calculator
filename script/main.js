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
    
    this.calculateSum = function(arrayOfValues) {
        let total = 0;
        arrayOfValues.forEach((value, index, array) => {
            total += parseFloat(value);
        })

        return total;
    }

    this.calculateSubtraction = function(arrayOfValues) {
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
        let result = 0;
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

        return dividendo;
    }

}

const calculator = new Calculator();

//console.log(calculator.numbersButtons);
console.log(calculator.calculateSum([5, 5]));
console.log(calculator.calculateSubtraction([50, 20, 20]));
console.log(calculator.calculateMultiplication([2, 2, 5, 2]));
console.log(calculator.calculateDivision([50, 2, 2]));



// const display = document.querySelector(".display-input");
// let arrayOfValues = [];
// let valueAcumulated = "";

// operations.operationsButtons.forEach((operation, index, array) => {
//     operation.addEventListener("click", (e) => {
//         if(operation.innerHTML == "+") {
//             display.value += operation.innerHTML;
//             if(display.value == "+")
//                 return;
            
//             arrayOfValues.push(valueAcumulated);
//             valueAcumulated = "";
//             // arrayOfValues.forEach((value) => {
//             //     console.log(value);
//             // })
//             console.log(arrayOfValues);
//         }

//         if(operation.innerHTML == "-") {
//             // aqui vem a subtração
//             console.log("subtração")
//         }
        
//         if(operation.innerHTML == "x") {
//             // aqui vem a multiplicação
//             console.log("multiplicação")
//         }

//         if(operation.classList[0] == "div-button"){
//             // aqui vem a divisão
//             console.log("divisão")
//         }
//     })
// });


// numbers.forEach((button, index, array) => {
//     button.addEventListener("click", (e) => {
//         if(button.innerHTML == "C")
//             return;
        
//         if(button.innerHTML == "=") {
//             let result = 0;
//             arrayOfValues.forEach((value, index, array) => {
//                 console.log(value);
//                 result += parseFloat(value);
//             })

//             display.value = result;
//             return;
//         }
        
//         display.value += button.innerHTML

//         valueAcumulated += button.innerHTML;

//     })
// })

// function calculateSum(number) {
//     let result = 0;
//     return result = number + number;
// }

