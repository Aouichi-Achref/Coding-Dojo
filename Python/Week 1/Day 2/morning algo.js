/* 
  Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
  No trailing separator at the end
  Default the separator to a comma with a space after it if no separator is provided
*/
//                   v
const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// take 5-7 mins to write the pseudocode here:

// create the function and decide what params it needs and what it will return
function join(arr, separator) {
    var newStr = ""
    if (arr.length == 0) {
        return newStr
    }
    for (var i = 0; i <= arr.length - 2; i++) {
        // if (i == arr.length - 1) {
        //     newStr += arr[i]
        // } else {
        newStr += arr[i] + separator
    }
    newStr += arr[arr.length - 1]
    return newStr
}

var expect1 = join(arr1, separator1)
console.log(expect1)

var expect2 = join(arr2, separator2)
console.log(expect2)

var expect3 = join(arr3, separator3)
console.log(expect3)

var expect4 = join(arr4, separator4)
console.log(expect4)

var expect5 = join(arr5, separator5)
console.log(expect5)