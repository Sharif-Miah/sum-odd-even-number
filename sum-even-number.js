
function sumAllNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(index, element);
        sum += element;
    }
    return sum;
}


function sumAllEvenNumber(even) {
    const array = [];
    for (i = 0; i < even.length; i++) {
        const eventIndex = i;
        const eventElement = even[eventIndex];
        if (eventElement % 2 === 0) {
            array.push(eventElement)
        }
    }
    return array;
}



const myArrayNumbers = [12, 65, 45, 78, 32, 55, 91, 65, 44, 82, 244, 75];
const sumNumbers = sumAllEvenNumber(myArrayNumbers);
console.log(sumNumbers);
const result = sumAllNumber(sumNumbers)
console.log(result);