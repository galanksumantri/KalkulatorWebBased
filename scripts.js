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