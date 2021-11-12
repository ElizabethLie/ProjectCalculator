const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const updateScreen = (number) => {
   calculatorScreen.value = number 
}
//bagian inputNumber dalam kalkulator 
const inputNumber = (number) => {
    //currentNumber += number
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        //console.log(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)

    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) =>{
        //console.log(event.target.value)
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    
    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    //console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
    console.log(currentNumber)
})
//bagian equals dalam kalkulator 
const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case "+":
            //result = parseInt(prevNumber) + parseInt(currentNumber)
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        case "%":
            result = prevNumber % currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}
// bagian clear dalam kalkulator 
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
  //console.log('AC button is pressed')
  clearAll()
  updateScreen(currentNumber)  
})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

 // bagian decimal dalam kalkulator
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
  //console.log(event.target.value)
  inputDecimal(event.target.value)
  updateScreen(currentNumber)  
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

//bagian persen dalam kalkulator 
const percentages = document.querySelector(".percentage");
const divPercent = (number) => {
    if (currentNumber === "0") {
      currentNumber = number;
    } else {
      currentNumber /= 100;
    }
  };
  
percentages.addEventListener("click", (event) => {
    divPercent(event.target.value);
    updateScreen(currentNumber);
});

//bagian delete dalam kalkulator 
const backspaces = document.querySelector(".backspace");
const deleteNumber = () => {
    if (currentNumber.length > 1) {
      currentNumber = currentNumber.slice(0, -1);
    } else {
      currentNumber = "0";
    }
};
backspaces.addEventListener("click", (event) => {
    deleteNumber(event.target.value);
    updateScreen(currentNumber);
});