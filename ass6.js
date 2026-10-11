const retirementCalculator = (age) => {
    let retirementAge = 60

    if (isNaN(age) || age < 0) {
        console.log('THIS IS NOT A VALID AGE')
    }
    else if (age > retirementAge) {
        console.log('YOU HAVE ALREADY RETIRED')
    }
    else if (age === retirementAge) {
        console.log('YOU WILL RETIRE THIS YEAR')
    }
    else {
        let yearsLeft = retirementAge - age
        console.log(`YOU HAVE ${yearsLeft} MORE YEARS TO RETIRE`)
    }
}

let age = Number(prompt('WHAT IS YOUR AGE'))
retirementCalculator(age)