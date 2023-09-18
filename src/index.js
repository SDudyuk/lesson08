/*task 1*/
function capitalizeStrings(inputArray) {
  const resultArray = [];

  for (let i=0; i<inputArray.length; i++) {
    let element = inputArray.at(i);
    resultArray.push(element.at(0).toUpperCase().concat(element.slice(1).toLowerCase()));
  }

  return resultArray;
}
/*test:*/
const words = ["aPple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]

/*task 2*/
function findCommonElements(array1, array2) {
  const resultArray = [];

  for (let i=0; i<array1.length; i++) {
    if (array2.includes(array1.at(i))) {
      resultArray.push(array1.at(i));
    }
  }

  return resultArray;
}
/*test:*/
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2)); // [3, 4, 5]

/*task 3*/
function analyzeArray(arrayNumber) {
  const objAnalyzed = {};
  let sum = 0;
  let count = 0;
  let minValue = arrayNumber.at(0);
  let maxValue = arrayNumber.at(0);

  for (count; count<arrayNumber.length; count++) {
    sum += arrayNumber.at(count);
    if (arrayNumber.at(count)<minValue) {
      minValue = arrayNumber.at(count);
    }
    if (arrayNumber.at(count)>maxValue) {
      maxValue = arrayNumber.at(count);
    }
  }

  objAnalyzed.sum = sum;
  objAnalyzed.average = sum/count;
  objAnalyzed.min = minValue;
  objAnalyzed.max = maxValue;

  return objAnalyzed;
}
/*test:*/
const numbers = [1, 2, 3, 4, 5];
console.log(analyzeArray(numbers)); // { sum: 15, average: 3, min: 1, max: 5 }