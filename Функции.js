"use strict"; 

//1 задание

function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let count = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {

    count += 1;
    sum += arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = sum / count;
  avg.toFixed(2);

  return {
    max: max, 
    min: min, 
    avg: avg
  };
}


//2 задание
function summElementsWorker(...array) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    count += 1;
    sum += array[i];
  }

  if (count == 0) {
    return 0;
  }

  return {
    sum: sum
  }; 
}

function differenceMaxMinWorker(...array) {
  let count = 0;
  let min = Infinity;
  let max = -Infinity;
  let dif = 0;
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] > max) {
      max = array[i];
    }

    if (array[i] < min) {
      min = array[i];
    }
  }

  if (count == 0) {
    return 0;
  }
  
  return {
    max: max,
    min: min
  };
}

function differenceEvenOddWorker(...array) {
  let count = 0;
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let dif = 0;
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] % 2 == 0) {
      sumEvenElement += array[i];
    }

    if (array[i] % 2 > 0) {
      sumOddElement += array[i];
    }
  }

  if (sumEvenElement >= sumOddElement) {
    dif = sumEvenElement - sumOddElement;
  }

  if (sumOddElement >= sumEvenElement) {
    dif = sumOddElement - sumEvenElement;
  }

  if (count == 0) {
    return 0;
  }

  return dif;
}

function averageEvenElementsWorker(...array) {
  let count = 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] % 2 == 0) {
      sumEvenElement += array[i];
      countEvenElement += 1;
    }
  }

  if (count == 0) {
    return 0;
  }

  return {
    sumEvenElement: sumEvenElement,
    countEvenElement: countEvenElement
  };
}



// 3 задание ???

function makeWork(...arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) {
    if (arrOfArr[i] > maxWorkerResult) {
      maxWorkerResult = arrOfArr[i];
    }
    func() {
      return maxWorkerResult;
    }
  }
}