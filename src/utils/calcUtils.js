import Swal from 'sweetalert2'
import { useCalculatorStore } from '../stores/calculator'
import { storeToRefs } from 'pinia'

//create precedence rule
const precedence = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
}

//check if the char is operator or not
const isOperator = (char) => {
  return ['+', '-', '*', '/'].includes(char)
}

// infix to postfix
const infixToPostfix = (expression) => {
  const output = []
  const OpStack = []
  //split expression into tokens and avoid error
  const tokens = expression.match(/(\d+\.?\d*|\+|\-|\*|\/)/g) || []
  console.log(tokens) //test use

  for (const token of tokens) {
    //if token is number, push to output
    if (!isNaN(token)) {
      output.push(token)
    } else if (isOperator(token)) {
      // if token is op , check its precedence
      while (OpStack.length && precedence[OpStack[OpStack.length - 1]] >= precedence[token]) {
        output.push(OpStack.pop())
      }
      OpStack.push(token)
    }
  }

  while (OpStack.length) {
    output.push(OpStack.pop())
  }
  console.log(output)
  return output
}

const evaluatePostfix = (postfixTokens) => {
  const stack = []

  for (const token of postfixTokens) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token))
    } else {
      const b = stack.pop()
      const a = stack.pop()

      switch (token) {
        case '+':
          stack.push(a + b)
          break
        case '-':
          stack.push(a - b)
          break
        case '*':
          stack.push(a * b)
          break
        case '/':
          stack.push(b === 0 ? NaN : a / b)
          break
      }
    }
  }

  if (isNaN(stack[0])) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid expression!',
    })

    const calculator = useCalculatorStore()
    calculator.resetExpression()
    return 0
  }

  console.log(stack)
  return stack[0]
}

export { infixToPostfix, evaluatePostfix }
