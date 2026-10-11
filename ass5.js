function addition() {
      let firstNumber = Number(prompt('WHAT IS YOUR FIRST NUMBER'))
      let secondNumber = Number(prompt('WHAT IS YOUR SECOND NUMBER'))
      let sum = firstNumber + secondNumber
 
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log(`YOU DON'T HAVE A VALID NUMBER`)
      }
      else {
        console.log(`THE SUM OF ${firstNumber} and ${secondNumber} is ${sum}`)
      }
    }
 
    function subtraction() {
      let firstNumber = Number(prompt('WHAT IS YOUR FIRST NUMBER'))
      let secondNumber = Number(prompt('WHAT IS YOUR SECOND NUMBER'))
      let difference = firstNumber - secondNumber
 
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log(`YOU DON'T HAVE A VALID NUMBER`)
      }
      else {
        console.log(`THE DIFFERENCE OF ${firstNumber} and ${secondNumber} is ${difference}`)
      }
    }
 
    function multiplication() {
      let firstNumber = Number(prompt('WHAT IS YOUR FIRST NUMBER'))
      let secondNumber = Number(prompt('WHAT IS YOUR SECOND NUMBER'))
      let product = firstNumber * secondNumber
 
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log(`YOU DON'T HAVE A VALID NUMBER`)
      }
      else {
        console.log(`THE PRODUCT OF ${firstNumber} and ${secondNumber} is ${product}`)
      }
    }
 
    function division() {
      let firstNumber = Number(prompt('WHAT IS YOUR FIRST NUMBER'))
      let secondNumber = Number(prompt('WHAT IS YOUR SECOND NUMBER'))
      let answer = firstNumber / secondNumber
 
      if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log(`YOU DON'T HAVE A VALID NUMBER`)
      }
      else if (secondNumber === 0) {
        console.log(`YOU CANNOT DIVIDE BY ZERO`)
      }
      else {
        console.log(`${firstNumber} DIVIDED BY ${secondNumber} is ${answer}`)
      }
    }