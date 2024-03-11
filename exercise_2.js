// Implementation of String.prototype.charCodeAt()
{
  function charCodeAt(str, index) {
    const symbols = [
      ' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')',
      '*', '+', ',', '-', '.', '/', '0', '1', '2', '3',
      '4', '5', '6', '7', '8', '9', ':', ';', '<', '=',
      '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
      'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[',
      '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e',
      'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
      'z', '{', '|', '}', '~'
    ]
    const result = str[index];
    if (index < 0 || index >= str.length) {
      return NaN;
    }
    for (let i = 0; i < symbols.length; i++) {
      if (symbols[i] === result) {
        return (i + 32);
      }
    }
    return -1;
  }
  let myString = "Hello, World!";
  console.log(charCodeAt(myString, 7));
}
// Implementation of String.prototype.concat()
{
  function concat(str1, str2) {
    return str1+str2
}
  console.log(concat('hello','world'))
}
// Implementation of String.prototype.endsWith()
{
  function endsWith(string, suffix, position = string.length) {
    for (let i = 0; i < suffix.length; i++) {
      if (string[position - suffix.length] !== suffix[i]) {
        return false
      }
      return true
    }
  }
  const string = 'to be or not to be, that is the question.'
  const suffix = 'not'
  console.log(endsWith(string, suffix, 12))

}
// Implementation of  String.prototype.lastIndexOf()
{
  function lastIndexOf(string, searchString, position) {
    if (typeof position === 'undefined' || position >= string.length) {
      position = string.length - 1;
    } else if (position < 0) {
      position = 0;
    }

    for (let i = position; i >= 0; i--) {
      let match = true;
      for (let j = 0; j < searchString.length; j++) {
        if (string[i + j] !== searchString[j]) {
          match = false;
          break;
        }
      }
      if (match) {
        return i;
      }
    }
    return -1;
  }

  const string = "Hello world,hello earth";
  console.log(lastIndexOf(string, 'hello', 16));
}
//  Implementation of String.prototype.repeat()
{
  function repeat(string, count) {
    let str = ''
    for (let i = 0; i < Math.floor(count); i++) {
      str += string
    }
    return str
  }
  const string = "hello"
  console.log(repeat(string, 3.5))
}
//  Implementation of String.prototype.replace()
{
  function replace(string, search, replaceValue) {
    let result = '';
    let index = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === search[index]) {
        index++;
        if (index === search.length) {
          result += replaceValue;
          index = 0;
        }
      } else {
        result += string[i];
        index = 0;
      }
    }
    return result;
  }
  console.log(replace('hello', 'el', 'lem'));
}
//  Implementation of String.prototype.slice()
{
  function slice(str, beginIndex, endIndex) {
    if (beginIndex < 0) {
      beginIndex = str.length + beginIndex, 0;
    }
    if (endIndex === undefined || endIndex > str.length) {
      endIndex = str.length;
    } else if (endIndex < 0) {
      endIndex = str.length + endIndex, 0;
    }
    if (endIndex < beginIndex) {
      return "";
    }

    let result = "";
    for (let i = beginIndex; i < endIndex; i++) {
      result += str[i];
    }
    return result;
  }

  const originalString = "Hello, World!";
  console.log(slice(originalString, 7, 12));

}
//  Implementation of String.prototype.split()
{
 function split(string, separator) {
    let result = [];
    let step = '';
    for (let i = 0; i < string.length; i++) {
        let match = true;
        for (let j = 0; j < separator.length; j++) {
            if (string[i + j] !== separator[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            result.push(step);
            step = '';
            i +=   separator.length - 1;
        } else {
            step += string[i];
        }
    }
    result.push(step);
    return result;
}
const string = "ads--sda--asd--dsa";
console.log(split(string, '--')); (
}

//  Implementation of String.prototype.startsWith()
{
  function startsWith(string, suffix, position = 0) {
    for (let i = suffix.length; i > 0; i--) {
      if (string[position - suffix.length] !== suffix[i]) {
        return false
      }
      return true
    }
  }
  const string = 'to be or not to be, that is the question.'
  const suffix = ' be'
  console.log(startsWith(string, suffix, 1))
}
// Implementation of String.prototype.substring() 
{
  function substring(str, start = 0, end = str.length) {
    if (start < end) {
      let subWord = '';
      for (let i = start; i < end; i++) {
        subWord += str[i];
      }
      return subWord;
    }
  }
  console.log(substring('string', 4));
}
