const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector(".calculator-screen")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const percentage = document.querySelector(".percentage")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

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

const inputOperator = (operator) => {
    if (calculationOperator === "") {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

const percent = (number) => {
    currentNumber = parseFloat(number)/100
}

const calculate = () => {
    let result = ''
    let prev = parseFloat(prevNumber)
    let current = parseFloat(currentNumber)
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

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(prevNumber+calculationOperator+currentNumber)
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(prevNumber+calculationOperator)
    })
})

percentage.addEventListener("click", () => {
    percent(currentNumber)
    if (calculationOperator === "") {
        updateScreen(currentNumber)
    } else updateScreen(prevNumber+calculationOperator+currentNumber)
})

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(prevNumber+calculationOperator+currentNumber)
})
