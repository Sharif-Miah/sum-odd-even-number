
function sumOfArrayNumber(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        let element = i;
        let result = number[i];

        sum = sum + result;
        // console.log(element, result, sum);
    }
    return sum;
}


let array = [39, 29, 61, 46, 10, 82, 57, 27, 27];

let myNumber = sumOfArrayNumber(array);
// console.log(myNumber);


function getSumOfArray(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum += elements;
        console.log(index, elements, sum);
    }
    return sum;
}

const myArrayNumbers = [12, 65, 45, 78, 32, 45, 91]
const arrayNum = getSumOfArray(myArrayNumbers)
console.log(arrayNum);