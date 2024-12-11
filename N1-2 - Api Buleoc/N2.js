function sumOfTopTwoIntegers(numbers) {
  if (numbers.length < 2) throw new Error("Array must have at least two numbers");

  let [max1, max2] = [-Infinity, -Infinity];

  for (const num of numbers) {
      if (num > max1) {
          max2 = max1;
          max1 = num;
      } else if (num > max2) {
          max2 = num;
      }
  }

  return max1 + max2;
}

// Test Cases
console.log(sumOfTopTwoIntegers([1, 4, 2, 3, 5])); // 9
console.log(sumOfTopTwoIntegers([-10, -20, -30, -5])); // -15
console.log(sumOfTopTwoIntegers([5, 1])); // 6
