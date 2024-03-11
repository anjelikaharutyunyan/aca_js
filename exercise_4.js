// Implementation of find() method 
{
    function find(array, callback) {

        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                return array[i];
            }
        }
        return undefined;
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log(find(numbers, (element) => element > 2));
}
// Implementation of filter() method 
{
    function filter(array, callback) {
        const copiedArray = [];

        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                copiedArray.push(array[i]);
            }
        }
        return copiedArray;
    }
    const numbers = [1, 2, 3, 4, 5];
    console.log(filter(numbers, (element) => element > 2));
}
// Implementation of map() method 
{
    function map(array, callback) {
        const newArray = [];

        for (let i = 0; i < array.length; i++) {
            newArray.push(callback(array[i], i, array));
        }
        return newArray;
    }
    const numbers = [1, 2, 3, 4, 5];
    console.log(map(numbers, (element) => element * 4));
}
// Implementation of every() method 
{
    function every(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i], i, array)) {
                return false;
            }
        }
        return true;
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log(every(numbers, (element) => element > 3));
}
// Implementation of some() method
{
    function some(array, callback) {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i], i, array)) {
                return true;
            }
        }
        return false;
    }

    const numbers = [1, 2, 3, 4, 5];
    console.log(some(numbers, (element) => element > 3));
}
// Implementation of findIndex() method
{
    function findIndex(array, match) {
        for (let i = 0; i < array.length; i++) {
            if (match(array[i])) {
                return i;
            }
        }
        return -1;
    }

    const numbers = [1, 5, 7, 4, 3, 5];
    console.log(findIndex(numbers, (element) => element > 6));
}
// Implementation of forEach() method
{
    function forEach(array, callback) {
        for (let i = 0; i < array.length; i++) {
            callback(array[i], i, array);
        }
    }

    const numbers = [1, 2, 3, 4, 5];
    forEach(numbers, (element) => console.log(element * 2));
}
// Implementation of reduce() method
function reduce (array, callback) {
    let accumulator = arr[0];
    for (let i = 1; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
};
console.log(reduce([1, 2, 3, 4, 5], (acc, value) => acc * value));