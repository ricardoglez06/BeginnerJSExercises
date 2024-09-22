//EXERCISE 01
// function findMax(a,b){
//     return (a>b) ? a : b;
// }

// let max = findMax(12,5);
// console.log(max);


//EXERCISE 02
/**
 * Name: width x height
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
// function resolutionName(width,height){
//     if (width >= 7680 && height >= 4320){
//         return "8K";
//     } else if (width >= 3840 && height >= 2160){
//         return "4K";
//     } else if (width >= 2560 && height >= 1440){
//         return "WQHD";
//     } else if (width >= 1920 && height >= 1080){
//         return "FHD";
//     } else if (width >= 1280 && height >= 720){
//         return "HD";
//     } else {
//         return false;
//     }
// }

// let name = resolutionName(1366,768);
// console.log(name);


//EXERCISE 03
// function getByIdx(arr, idx){
//     return (arr[idx] !== undefined) ? arr[idx] : "The element doesn´t exist";
// }

// let result = getByIdx([1,2],1);
// console.log(result);


//EXERCISE 04
// for (let i=0;i<=10;i++){
//     if (i%2 !== 0){
//         console.log(`odd number ${i}`);
//     }
// }


//EXERCISE 05
// let array = [2, 5, 7, 15, -5, -100, 55];

// function getMinMax(arr){
//     let min = Math.min(...array);
//     let max = Math.max(...array);
//     return [min,max];
// }

// let numbers = getMinMax(array);
// console.log(numbers);


//EXERCISE 06
let array = [2, 5, 7, 15, -5, -100, 55];

function positiveNumbers(array){
    let positives = 0;
    for (number of array){
        (number > 0) ? positives++ : positives;
    }
    return positives;
}

let result = positiveNumbers(array);
console.log(result);