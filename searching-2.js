// 2. Adding a React UI

// For exercises 1 and 2, you will be using a search algorithm to search for an item in a dataset.
// You will be testing the efficiency of 2 search algorithms, linear search and binary search.
//You will also have a UI (a simple textbox will do) through which you will be sending your input that you want to search.
//There is no server-side to this program. All of this should be done using React.

// 1) Linear search

// Given the following dataset, find out how many tries it took to search for a
// particular item in the dataset.
// If the item is not in the dataset,
//provide a message and indicate how many searches it took to find that out.

// O(n) --> It takes as many searches are there are items in the array at most

let firstArray = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53];

//find 70 would take 6 searches

function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
}

indexOf;

// 2) Binary search

// Use the same front end and the dataset from the previous exercise for this exercise.
// Use array.sort to sort the dataset.
// Then implement a binary search to find a particular value in the dataset.
// Display how many tries it took to search for a particular item in
//  the dataset using binary search. If the item is not in the dataset, provide
//   a message and indicate how many searches it took to find that out.

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

let secondArray = firstArray.sort();
console.log(secondArray);
binarySearch(secondArray, 25, 0, 10);
//find 70 would take two searches
