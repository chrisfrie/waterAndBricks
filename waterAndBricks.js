//let arr = [2, 0, 1, 1, 0, 4, 1, 3, 0, 1];
//let arr = [2, 1, 3];
//let arr = [2, 0, 3, 0, 4];
let arr = [2, 0, 1, 2, 3, 0, 1, 0, 3, 1, 2, 1];

// Ermittlung des Maximalwertes
let count = 0;
let maxValueArr = Math.max(...arr);
console.log("value of max: " + maxValueArr);

// wie oft gibt es den Maixmalwert
for (let i = 0; i < arr.length; i++){
    (arr[i] == maxValueArr) ? count += 1 : count += 0;
};
console.log("count of max: " + count);

// Grenze rechts und linke
let arrIndexZero = 0;
let borderEndIndex = arr.findIndex(element => element == maxValueArr);
console.log("borderEnd "+ borderEndIndex);

for (let i = 0; i < count; i++){
    
    let subArr = arr.slice(arrIndexZero, borderEndIndex);
    console.log(subArr);
    
    let arrNewNew = arr.slice(borderEndIndex, arr.findIndex(element => element > arr[borderEndIndex]));
    console.log(arrNewNew);
};

