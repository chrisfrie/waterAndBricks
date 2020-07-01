let arr = [2, 0, 1, 2, 3, 0, 0, 1, 0, 3, 1, 0, 2, 1]; // Solution: 17
//let arr = [2, 1, 0, 3]; // Solution: 3
//let arr = [2, 0, 3, 0, 4]; // Solution: 5
let result = 0;

console.log("Das Ausgans-Array lautet: " + arr);


for (let i = 1; i < arr.length - 1 ; i++){
    console.log("Value von i ist: " + arr[i]);
    console.log("------------------");
    let subArrLeft = arr.slice(0, i);
    console.log(subArrLeft);
    let maxValueLeft = Math.max(...subArrLeft);
    console.log(maxValueLeft);
    console.log("------------------");
    let subArrRight = arr.slice(i+1);
    console.log(subArrRight);
    let maxValueRight = Math.max(...subArrRight);
    console.log(maxValueRight);
    console.log("------------------");
    console.log("------------------");

    if(maxValueLeft >= maxValueRight && arr[i] <= maxValueRight){
        result += maxValueRight - arr[i];
    }
    else if (maxValueLeft < maxValueRight && arr[i] <= maxValueLeft){
            result += maxValueLeft - arr[i];
    }
    else {
        result += 0;
    }
    console.log("Das Result ist: " + result);
    console.log("------------------");
    console.log("------------------");
    console.log("------------------");
}
console.log(result);
