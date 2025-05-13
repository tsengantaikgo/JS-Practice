//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
function compareNumbers(a, b) {
  return a - b;
}
const clean = (array) => {
  const arrlength = array.length;
  const arraySorted = array.toSorted(compareNumbers); // [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591]
  let finalArr = [];
  let subArr = [];

  let compareNumber = arraySorted[0]; //1
  for (let i = 0; i < arrlength + 1; i++) {
    //15
    if (compareNumber === arraySorted[i]) {
      subArr.push(arraySorted[i]);
    } else {
      compareNumber = arraySorted[i];
      if (subArr.length == 1) {
        finalArr.push(...subArr); //[]
      } else {
        finalArr.push(subArr); // maintain nested [[]]
      }
      subArr = []; //清空
      subArr.push(arraySorted[i]);
    }
  }
  return finalArr;
};

//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const answer = (numbers, target) => {
  let subArr = [];
  let ansArr = [];
  let answer = target;
  let numAccount = numbers.length; // total number

  for (let i = 0; i < numAccount; i++) {
    for (let j = i + 1; j < numAccount; j++) {
      if (numbers[i] + numbers[j] == answer) {
        subArr.push(numbers[i], numbers[j]);
        ansArr.push(subArr);
        subArr = [];
      }
    }
  }

  if (ansArr.length == 1) {
    return ansArr.flat();
  }

  let message = ansArr.length > 0 ? ansArr : "No match found"; // 如果沒找到
  return message;
};

//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
