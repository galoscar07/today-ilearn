// switch statements

const grade = 'D'

// using if statements
if (grade === 'A') {

} else if (grade === 'B') {

} else if (grade === 'C') {
    
} else if (grade === 'D') {
    
} else if (grade === 'e') {
    
} else {

}

// instead of that you can use
// without a break if will go in all the cases
switch(grade) {
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got an B');
        break;
    case 'C':
        console.log('You got an C');
        break;
    case 'D':
        console.log('You got an D');
        break;
    case 'E':
        console.log('You got an E');
        break;
    default:
        console.log('Not a valid grade');
}
