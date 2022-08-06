
function getSumOfArray(numbers) {
    sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const elements = numbers[index];
        sum += elements;
        // console.log(index, elements, sum);
    }
    return sum;
}


function sumOddNumberAnArray(numbers) {
    const array = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            // console.log(index, element);
            array.push(element);
        }


    }
    return array;
}


const myArrayNumbers = [12, 65, 45, 78, 32, 55, 91];
const oddNUmber = sumOddNumberAnArray(myArrayNumbers)
// console.log(oddNUmber);
const oddNumberSum = getSumOfArray(oddNUmber);
console.log(oddNumberSum);