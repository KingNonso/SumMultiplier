function makeSubstrComboIndex(fetchString) {
    let original = fetchString;
    let lengthOfString = original.length - 1;
    let combinationIndexArray = [];
    let firstArray = [];
    let secondArray = [];

    for (let i = 0; i < original.length; i++) {
        secondArray.push(i);
        firstArray.push(secondArray);
        combinationIndexArray.push(secondArray);
        for (let j = 0; j < firstArray.length; j++) {
            secondArray = [];
            let a = Math.max.apply(null, firstArray[j]);
            let diff = lengthOfString - a;
            for (let l = 0; l < diff; l++) {
                secondArray = [];
                for (let k = 0; k < firstArray[j].length; k++) secondArray.push(firstArray[j][k]);
                a++;
                secondArray.push(a);
                firstArray.push(secondArray);
                combinationIndexArray.push(secondArray);
            }
        }
        firstArray = [];
        secondArray = [];
    }
    return combinationIndexArray;
}

function makeComboValues(combinationIndexArray, fetchString) {
    let original = fetchString;
    let combinationValueArray = [];
    for (let y = 0; y < combinationIndexArray.length; y++) {
        let fs = "";
        for (let n = 0; n < combinationIndexArray[y].length; n++) {
            if(n!==combinationIndexArray[y].length-1) fs += original[combinationIndexArray[y][n]] + ", ";
            else fs += original[combinationIndexArray[y][n]];
        }
        combinationValueArray.push(fs);
    }
    return combinationValueArray;
}

function SumMultiplier(arr) {
  let doubleSumArray = 0;
  for(let i=0; i<arr.length; i++) doubleSumArray += arr[i];
  doubleSumArray *= 2;

  let combinationIndexArray = makeSubstrComboIndex(arr);

  let combinationValueArray = makeComboValues(combinationIndexArray, arr);
  for(let i=0; i<combinationValueArray.length; i++){
    let temp = combinationValueArray[i].split(",");
    if(temp.length == 2) if(temp[0]*temp[1] > doubleSumArray) return true;
  }
  return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(SumMultiplier(readline()));

