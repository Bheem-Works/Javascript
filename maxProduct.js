// let products = [1, 2, 3, 4, 5, 6];
// let findMaxNumber = Math.max(...products);

// console.log(findMaxNumber);

// function findMaxProduct(arr) {
//   let sortedArr = arr.sort((a, b) => b - a);
//   return sortedArr[0] * sortedArr[1];
// }

// let result = findMaxProduct(products);
// console.log(result);

// let findMax = [1, 2, 5, 6];
// let arrShow = findMax.map((x) => x);
// let temp = arrShow[0];
// for (let i = 1; i < arrShow.length; i++) {
//   if (arrShow[i] > temp) {
//     temp = arrShow[i];
//   }
// }

// console.log(temp);

// Bubble shorts;

let arr = [1, 4, 2, 7, 3];
let lengthOfSort = arr.length;

for (let i = 0; i < lengthOfSort; i++) {
  for (let j = 0; j < lengthOfSort - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
