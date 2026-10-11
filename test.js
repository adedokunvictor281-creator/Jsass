const monthOfTheYear = prompt('WHAT MONTH IS IT').toLowerCase().trim

if(monthOfTheYear === 'september' || monthOfTheYear === 'october' || monthOfTheYear === 'november'){
    console.log (`THE SEASON IS AUTUMN BECAUSE THE MONTH IS ${monthOfTheYear}`)
}
else if(monthOfTheYear === 'december' || monthOfTheYear === 'january' || monthOfTheYear == 'febuary'){
    console.log (`THE SEASON IS WINTER BECAUSE THE MONTH IS ${monthOfTheYear}`)
}
else if(monthOfTheYear === 'march' || monthOfTheYear === 'april' || monthOfTheYear == 'may'){
    console.log (`THE SEASON IS SPRING BECAUSE THE MONTH IS ${monthOfTheYear}`)
}
else if(monthOfTheYear === 'june' || monthOfTheYear === 'july' || monthOfTheYear == 'august'){
    console.log (`THE SEASON IS SUMMER BECAUSE THE MONTH IS ${monthOfTheYear}`)
}
