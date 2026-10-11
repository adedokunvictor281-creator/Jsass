const grade = Number(prompt('WHAT IS YOUR MARK'));

if (grade >= 80 && grade <=100) {
    console.log('YOUR GRADE IS A');
}
else if(grade >=70 && grade <= 79) {
    console.log('YOUR GRADE IS B')
}
else if(grade >=60 && grade <= 69) {
    console.log('YOUR GRADE IS C')
}
else if(grade >=50 && grade <= 59) {
    console.log('YOUR GRADE IS D')
}
else if(grade >=0 && grade <= 49) {
    console.log('YOUR GRADE IS F')
}
else{
    console.log('THIS IS NOT VALID MARK')
}


