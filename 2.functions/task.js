// Задание 1
function getArrayParams(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  let avg;
  let num = arr.length;

  for(let i = 1; i < num; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }

    if(arr[i] > max) {
      max = arr[i];
    }

    sum += arr[i];
  }
  avg = sum / num;
  // avg = Number(avg.toFixed(2));  // странно, что в этот раз Жасмину не нравятся числа))
  avg = avg.toFixed(2);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Number.MAX_SAFE_INTEGER;

  for(let i = 0; i < arrOfArr.length; i++) {
    let arrMax = func(arrOfArr[i]);
    if(arrMax > max) {
      max = arrMax;
    }
  }

  return max
}