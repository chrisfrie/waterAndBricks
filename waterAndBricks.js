//let arr = [2, 0, 1, 1, 0, 4, 1, 3, 0, 1];
let arr = [2, 0, 1, 2, 3, 0, 1, 2, 1];
//let arr = [2, 1, 3];
//let arr = [2, 0, 3, 0, 4];
let result = 0;
let start = arr[0];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

if (arr.findIndex(element => element > start)){
    let newArr = arr.slice(0, (arr.findIndex(element => element > start)));
    console.log(newArr);
    console.log(arr);
    console.log(newArr.reduce(reducer) - newArr[0]);
    console.log(newArr[0] * (newArr.length - 1) - (newArr.reduce(reducer) - newArr[0]));

}
else if (arr.findIndex(element => element > start - 1)){

}


// if (start < arr[border]){
//     result += ((start * (border-1))-x)
// }

// ;









// let borderZero = arr[0];

// for (let value of arr) {
//     if (borderZero > value){
//         result += borderZero - value;
        
//     } 
//     else {
//         value = borderZero;
        
//     }
//   }
//   console.log(result);
// 11
// 21
// 31

// let found = arr.indexOf(arr.find(element => element > arr[0]));
// console.log(found);
// if (found == -1){
//     found = arr.indexOf(arr.find(element => element == arr[0]));
//     console.log(found);
// }
// for (let i = 0; i < found; i++){
//     result += arr[0] - arr[i];
// }

// console.log(arr.length);
// console.log(found);
// console.log(result);

// console.log(arr.slice(found));

// if (found < arr.length - 1){
//     arr = arr.slice(found);

//     found = arr.indexOf(arr.find(element => element > arr[0]));
//     if (found == -1){
//         arr = arr.reverse();
//         console.log(arr);
//         found = arr.indexOf(arr.find(element => element > (arr[0])));
//         console.log(found);
//         for (let i = 0; i < found; i++){
//             result += arr[0] - arr[i];
//         }

//         console.log(arr.length);
//         console.log(result);
//         if (found < arr.length - 1){
//             console.log(arr.slice(found));
//             arr = arr.slice(found);

//             found = arr.indexOf(arr.find(element => element > arr[0]));
//             console.log(found);
//             if (found == -1){
//                 arr = arr.reverse();
//                 console.log(arr);
//                 found = arr.indexOf(arr.find(element => element > (arr[0])));
//                 console.log(found);
//                 for (let i = 0; i < found; i++){
//                     result += arr[0] - arr[i];
//                 }
//             }
//             else {
//                 for (let i = 0; i < found; i++){
//                 result += arr[0] - arr[i];
//                 }
//             }
//         }
//         else {
//             for (let i = 0; i < found; i++){
//             result += arr[0] - arr[i];
//             }
//         }
//     }  
//     else {
//         for (let i = 0; i < found; i++){
//         result += arr[0] - arr[i];
//         }
//     }
//     console.log(found);
//     console.log(result);
// }
