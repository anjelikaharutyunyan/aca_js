// Exercise 1 // Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.
{
    function invertObject(obj) {
        const invertedObject = {};

        for (let key in obj) {
            if (invertedObject.hasOwnProperty(obj[key])) {
                if (Array.isArray(invertedObject[obj[key]])) {
                    invertedObject[obj[key]].push(key);
                } else {
                    let array = [invertedObject[obj[key]]];
                    array.push(key)
                    invertedObject[obj[key]] = array
                }
            } else {
                invertedObject[obj[key]] = key;
            }
        }

        return invertedObject;
    }
    console.log(invertObject({ a: '1', b: '2', c: '2', d: '2', e: '3', f: '3', g: 'g' }));
}
// Exercise 2 // Given two objects. Write a function that performs shallow compare.
{
    function shallowCompare(a, b) {
        for (let key in a) {
            if (a[key] !== b[key] || !b.hasOwnProperty(key)) {
                return false;
            }
        }
        for (let key in b) {
            if (a[key] !== b[key] || !a.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    console.log(shallowCompare(a = { 'b': 1 }, b = { 'b': 1, 'a': 2 }))
}
// Exercise 3 // Check whether string is palindrome, or not.
{
    function isPalindrome(string) {
        for (let i = 0; i < string.length / 2; i++) {
            if (string[i] !== string[string.length - i - 1]) {
                return false
            }
            return true
        }
    }
    console.log(isPalindrome('asddsa'))
}
// Exercise 4 // Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.
{
// first solution
const numbers = [1,2,3,8,9,10]
let min = numbers[0]
let max = numbers[0]
for(i = 0; i < numbers.length; i++) {
    if(min > numbers[i]){
        min = numbers[i]
    }
    if(max < numbers[i]){
        max = numbers[i]
    }
}
const expectedCount = max - min + 1
const realCount = numbers.length
const countOfMissingNumbers = expectedCount - realCount
console.log(countOfMissingNumbers)

//second solution 
function findMinMax (arr) {
    let minimum = arr[0]
    let maximum = arr[0]
    for(i = 0; i < arr.length; i++) {
        if(minimum > arr[i]){
            minimum = arr[i]
        }
        if(maximum < arr[i]){
            maximum = arr[i]        
        }
    }
    return {minimum, maximum}
}

const {minimum, maximum} = findMinMax(arr)
const arr = [1,2,3,8,9,10]

function countOfMissingNumbers (arr, minimum, maximum) {
    let count = 0
    for(let i = minimum; i < maximum; i++) {
        if(!arr.includes(i)){
            count++
        }
    }
    return count
}

console.log(countOfMissingNumbers(arr, minimum, maximum))
}
// Exercise 5 // Given an array and element. Check if that element exists in array.
{
function isExist(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] == element) {
        return true
      }
      continue
    }
    return false
}
let arr = ['a', 'b', 1, 'asd', 'hello world', 2024]
console.log(isExist(arr, 'asdd'))
}
