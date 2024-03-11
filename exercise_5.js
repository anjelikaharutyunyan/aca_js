// Given a number. Write a recursive function that reverse the number. Return the new
// number.
{
    function reverse(number) {
        const strNumber = number.toString();
        const lastDigit = strNumber.length - 1
        if (number.length == 0) {
            return ''
        }
        return strNumber.charAt(lastDigit) + reverse(strNumber.substring(0, lastDigit))
    }
    console.log(reverse(12))
}

// Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two.
{
    function findSecondOccurrence(number, array, index = 0, count = 0) {
        if (index >= array.length) {
            return -1;
        }
        if (array[index] === number) {
            count++;
            if (count === 2) {
                return index;
            }
        }
        return findSecondOccurrence(number, array, index + 1, count);
    }

    const array = [1, 2, 3, 4, 2, 5, 2, 6];
    const number = 2;
    console.log(findSecondOccurrence(number, array))
}

// Given a substring and a string. Find how many times the substring occurred in the string.
// (For getting substring of the string use str.substring(startIndex, endIndex),
// str.substr(startIndex, length) )
{
    function countSubstr(str, sub, index = 0, count = 0) {
        if (index + sub.length > str.length) {
            return count;
        }
        if (str.substr(index, sub.length) === sub) {
            count++;
        }
        return countSubstr(str, sub, index + 1, count);
    }
    const string = "Are var far shared?";
    const substring = "ar";
    console.log(countSubstr(string, substring));
}

// Given a string, compute recursively (no loops) a new string where all appearances of &quot;pi&quot;
// have been replaced by &quot;3.14&quot;.
{
    function replacePi(string) {
        str = string.toLowerCase()
        if (str.length === 0 || !str.includes("pi")) {
            return str;
        } else {
            const index = str.indexOf("pi");
            return str.substring(0, index) + "3.14" + replacePi(str.substring(index + 2));
        }
    }
    const originalString = "Picsart pipelines";
    console.log(replacePi(originalString));
}

// Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
// function that concats arrays).
{
    function flattenArray(arr) {
        let flattened = [];

        for (let element of arr) {
            if (Array.isArray(element)) {
                flattened = flattened.concat(flattenArray(element));
            } else {
                flattened.push(element);
            }
        }
        return flattened;
    }

    const nestedArray = [1, [2, [3, 4]], 5, [6, 7]];
    console.log(flattenArray(nestedArray));
}

// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum
{
    function sumOfDigits(num) {
        let numStr = num.toString();
        let sum = 0;

        for (let digit of numStr) {
            sum += parseInt(digit);
        }
        if (sum >= 10) {
            return sumOfDigits(sum);
        } else {
            return sum;
        }
    }
    console.log(sumOfDigits(12345));
}