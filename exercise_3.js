// Given an array. Determine whether it consists only from uniques or not.
{
    function isArrayElementsUnique(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    return false
                }
            }
        }
        return true
    }

    const array1 = ['asd', 1, 2, 5, 'asd']
    const array2 = ['asd', 1, 2, 5, 3]

    console.log(isArrayElementsUnique(array1))
    console.log(isArrayElementsUnique(array2))
}
// Given an array of numbers. Find the sum of prime numbers. 
{
    function isPrime(number) {
        for (let i = 2, j = Math.sqrt(number); i <= j; i++) {
            if (number % i === 0) return false;
        }
        return true;
    }

    function sumOfPrimeNumbers(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (isPrime(array[i])) {
                sum += array[i];
            }
        }
        return sum;
    }

    const array = [11, 2, 5, 6, 4, 12];
    console.log('The sum of prime numbers is', sumOfPrimeNumbers(array));

}
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
{
    function maxAdjacentProduct(arr) {
        let maxProduct = arr[0] * arr[1];

        for (let i = 0; i < arr.length; i++) {
            const product = arr[i] * arr[i + 1];
            if (product > maxProduct) {
                maxProduct = product;
            }
        }
        return maxProduct;
    }

    const arr = [3, 6, 2, 5, 7];
    console.log(maxAdjacentProduct(arr));
}
// Given a sorted array and an element from that array. Find the index of that element using binary search.
{
    let binarySearch = function (array, x, start, end) {
        if (start > end) return false;

        const middle = Math.floor((start + end) / 2);

        if (array[middle] === x) return middle;

        if (array[middle] > x) {
            return binarySearch(array, x, start, middle - 1);
        } else {
            return binarySearch(array, x, middle + 1, end);
        }
    }

    let arr = [1, 3, 5, 7, 8, 9];
    let x = 3;
    console.log(binarySearch(arr, x, 0, arr.length - 1));
}