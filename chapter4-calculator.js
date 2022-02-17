const add = (firstNum, secNum) => {
    let beginningNums = `${firstNum} + ${secNum} = `

    let result = firstNum + secNum
    return console.log(beginningNums, result);
}
add(2, 4);

const subtract = (firstNum, secNum) => {
    let beginningNums = `${firstNum} - ${secNum} = `
    
    let result = firstNum - secNum
    return console.log(beginningNums, result);
}
subtract(6, 4)

const divide = (firstNum, secNum) => {
    let result = firstNum / secNum
    return result
}
let quotient = divide(60, 4);
console.log(quotient);

const multiply = (firstNum, secNum) => {
    let result = firstNum * secNum
    return result
}
let product = multiply(15, 4);
console.log(product);

const square = num => {
    let result = num * num
    return result
}
let squaredNumber = square(5);
console.log(squaredNumber);

