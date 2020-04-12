// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
//identify the sequence of numbers that each recursive call will search to try and find 8.
//11 15 17 (and returns -1)
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(item);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

let numArray = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
let exValue = 16;
let exStart = 0;
let exEnd = 9;

binarySearch(numArray, exValue, exStart, exEnd);
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm,
//identify the sequence of numbers that each recursive call will search to try and find 16.
// 11 5 6 8
