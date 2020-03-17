const add = (a,b) => a + b;
const sub = (a,b) => a - b;
const mul = (a,b) => a * b;
const div = (a,b) => a / b;

function expressionCalculator(expr) {
    // write your solution here
    return stringToArray(expr);

}

module.exports = {
    expressionCalculator
}

function stringToArray(string) {

    let array = [];
    let operatorList = "+-/*";
    let number = '';

    console.log(string);

    string = string.replace(/\s+/g, "");

    if(string.replace(/\(+/g, "").length != string.replace(/\)+/g, "").length)
        throw "ExpressionError: Brackets must be paired";

    for(let char of string) {
        if(char == "(" || char == ")") {
            array.push(char);
            number = '';
        }  
        else if(operatorList.search('\\'+char) != -1) {
            array.push(char);
            number = '';
        }
        else if(Number(char)||char == '0') {
            if(number) {
                array[array.length-1] += char;                
            }
            else {
                array.push(char);
                number = char;
            }
        }
    }
    console.log(array);
    return array;
}