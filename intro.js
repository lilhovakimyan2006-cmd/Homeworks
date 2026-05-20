//Task 1: Linear Search 
//O(n)
// function linearSearch(arr, target) {
//     for(let i = 0; i < arr.length; ++i) {
//         if(arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }
// arr = [10, 20, 30, 40, 50]
// target = 30
// console.log(linearSearch(arr, target));
//12ms


//Task 2: Bubble Sort
function bubble(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

let arr = [5, 3, 8, 4, 2];
bubble(arr);
console.log(arr)
