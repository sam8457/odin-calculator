

// ***** GLOBAL VARIABLES *****

// holds text on the screen
let screenText = ""
const screen = document.querySelector(".screen\-content")


// ***** FUNCTIONS *****

// updates text on the screen
function addToScreen(item){
    screenText += item.textContent
    screen.textContent = screenText
}
// adds operators to screen with spaces
function addToScreenOperator(item){
    screenText += " " + item.textContent + " "
    screen.textContent = screenText
}
// resets the calculator
function clearScreen(){
    screen.textContent = "."
    screenText = ""
}
// updates screen with arbitrary text
function directUpdate(content){
    screenText = content
    screen.textContent = content
}
// evaluates what's on screen
function evaluateScreen(){
    let screenArr = screenText.split(" ")
    while (screenArr.length >= 3) {
        let result = 0
        let num1 = parseInt(screenArr[0])
        let op = screenArr[1]
        let num2 = parseInt(screenArr[2])
        switch(op) {
            case "+":
                result = num1 + num2
                screenArr.splice(0,3,result)
            break
            case "-":
                result = num1 - num2
                screenArr.splice(0,3,result)
            break
            case "x":
                result = num1 * num2
                screenArr.splice(0,3,result)
            break
            case "/":
                result = num1 / num2
                screenArr.splice(0,3,result)
            break
            default:
                screenArr = ["Error"]
            break
        }
    }
    directUpdate(screenArr[0])
}


// ***** MAIN *****

// Apply queries to number buttons
const numbersNodelist = document.querySelectorAll(".number")
const numbers = [...numbersNodelist]

for (let i = 0; i < numbers.length; i++) {
    (numbers[i]).addEventListener("click", () => {
        addToScreen(numbers[i])
    })
}

// Apply queries to operators
const operatorsNodelist = document.querySelectorAll(".operator")
const operators = [...operatorsNodelist]

for (let i = 0; i < operators.length; i++) {
    (operators[i]).addEventListener("click", () => {
        addToScreenOperator(operators[i])
    })
}

const clr = document.querySelector(".clr")
clr.addEventListener("click", clearScreen)

const eq = document.querySelector(".eq")
eq.addEventListener("click", evaluateScreen)