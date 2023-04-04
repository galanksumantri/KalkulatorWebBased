const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number   
    }
}

const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    let prev = parseInt(prevNumber)
    let current = parseInt(currentNumber)
    switch(calculationOperator) {
        case "+":
            result = prev + current
            break
        case "-":
            result = prev - current
            break
        case "*":
            result = prev * current
            break
        case "/":
            result = prev / current
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}