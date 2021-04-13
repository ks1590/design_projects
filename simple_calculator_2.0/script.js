class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.tostring().slice(0, -1)
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.tostring() + number.tostring()
  }

  chooseOperation(operation) {
    if (this.currentOperand === "") return
    if (this.previousOperand != "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case "+":
        computation = prev + current
      case "-":
        computation = prev - current
      case "*":
        computation = prev * current
      case "÷":
        computation = prev / current
        break;
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ""
  }

  getdisplayNumber(number) {
    const stringNumber = number.tostring()
    const integerDigits = parseFloat(stringNumber.split(".")[0])
    const decimalDigits = stringNumber.split(".")[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ""
    } else {
      integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerTxet =
      this.getdisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerTxet =
        `${this.getdisplayNumber(this.previousOperandTextElement)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerTxet = ""
    }
  }
}

const numberButton = document.querySelectorAll("[data-number}")
const operationButton = document.querySelectorAll("[data-operation]")
const equalButton = document.querySelector("[data-equals]")
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerTxet)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})