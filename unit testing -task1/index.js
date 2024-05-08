// Fn_1
export function MissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - arrSum;
}

// Fn_2
export function calculateExpression(expression) {
  return eval(expression);
}

// Fn_3
export const letterNumber = (str, letter) => {
  var eNum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      eNum++;
    }
  }
  return eNum;
};

// Fn_4
export const capitalizeWords = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// Fn_5
export const area = (radius) => {
  const area = Math.PI * Math.pow(Number(radius), 2);
  return area;
};

// Fn_6
export const reverseSentenceWords = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
};

// Fn_7
export const mergeDistinctArrays = (arr1, arr2) => {
  const Arr3 = [...arr1, ...arr2];
  const newArr = [];
  Arr3.forEach((ele) => {
    if (!newArr.includes(ele)) {
      newArr.push(ele);
    }
  });
  return newArr;
};

// Fn_8
export const shuffle = (array) => {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

// Fn_9
export const longestString = (str) => {
  let arr = [];
  let myArr = [];
  let len = 0;
  let max = 0;

  str.split("").forEach((ele, i) => {
    if (!arr.includes(ele)) {
      arr.push(ele);
      if (str.length - 1 == i) {
        myArr[len] = [...arr];
      }
    } else {
      myArr[len] = [...arr];
      len++;
      arr = [];
      arr.push(ele);
    }
  });
  for (let i = 0; i < myArr.length; i++) {
    max = myArr[i].length > max ? i : max;
  }
  return myArr[max].join("");
};

// Fn_10
export const getSumOfRandom = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += Math.floor(Math.random() * num);
  }
  return result;
};
