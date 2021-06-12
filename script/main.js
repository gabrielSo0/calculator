// class calculator {
//     constructor(number) {
//         this.number = number;
//     }

//     calculateSum() {
//         return this.number + this.number 
//     }

// }


const numbers = document.querySelectorAll(".numbers-button");
const operations = document.querySelectorAll(".operation-button");
const display = document.querySelector(".display-input");
let arrayOfValues = [];
let valueAcumulated = "";

operations.forEach((operation, index, array) => {
    operation.addEventListener("click", (e) => {
        if(operation.innerHTML == "+") {
            display.value += operation.innerHTML;
            if(display.value == "+")
                return;
            
            arrayOfValues.push(valueAcumulated);
            valueAcumulated = "";
            // arrayOfValues.forEach((value) => {
            //     console.log(value);
            // })
            console.log(arrayOfValues);
        }

        if(operation.innerHTML == "-") {
            // aqui vem a subtração
            console.log("subtração")
        }
        
        if(operation.innerHTML == "x") {
            // aqui vem a multiplicação
            console.log("multiplicação")
        }

        if(operation.classList[0] == "div-button"){
            // aqui vem a divisão
            console.log("divisão")
        }
    })
});


numbers.forEach((button, index, array) => {
    button.addEventListener("click", (e) => {
        if(button.innerHTML == "C")
            return;
        
        if(button.innerHTML == "=") {
            let result = 0;
            arrayOfValues.forEach((value, index, array) => {
                console.log(value);
                result += parseFloat(value);
            })

            display.value = result;
            return;
        }
        
        display.value += button.innerHTML

        valueAcumulated += button.innerHTML;

    })
})

function calculateSum(number) {
    let result = 0;
    return result = number + number;
}

