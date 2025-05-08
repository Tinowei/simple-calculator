import { defineStore } from 'pinia'
import { ref } from 'vue'
import { infixToPostfix, evaluatePostfix } from '../utils/calcUtils'
import Swal from 'sweetalert2'

export const useCalculatorStore = defineStore('calculator', () => {
  const expression = ref('')
  const result = ref('')

  //display on screen
  function displayOnScreen(input) {
    if (expression.value === '0') {
      if (!isNaN(input)) {
        expression.value = input
      } else {
        expression.value += input
      }
      return
    }
    expression.value += input
  }
  // clear display and result
  function clear() {
    expression.value = ''
    result.value = ''
  }

  function del() {
    expression.value = expression.value.slice(0, -1)
  }

  function calculate() {
    try {
      const postfix = infixToPostfix(expression.value)
      const res = evaluatePostfix(postfix)
      result.value = res.toString()
      expression.value = result.value
      console.log(expression.value)
    } catch (e) {
      result.value = 'Error'
      console.log(e)
      expression.value = ''
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please reset or enter a valid expression',
      })
    }
  }

  return {
    expression,
    result,
    displayOnScreen,
    clear,
    del,
    calculate,
  }
})
