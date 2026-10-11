let colors = '0123456789ABCDEF'
let color = '#'

for(let p = 0; p < 6; ++p) {
    let randColor = parseInt(Math.random() * colors.length)
    color = color + colors[randColor]
}

console.log(color)


let numbers = '12334567890!@#$%^&*uwwsuishaqwuieowyueomndzQWERTYUIOKSHDAZXCVNBM'
let password = ''

let amount = parseInt(prompt('How many digits do you want?'))

for(let i = 0; i < amount; ++i) {

    let randomNumber = parseInt(Math.random() * numbers.length)

    password = password + numbers[randomNumber]
}

console.log(password)