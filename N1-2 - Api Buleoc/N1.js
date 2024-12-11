function findMostFrequentStringLength(strings) {
  const lengthMap = {};

  // Đếm tần suất độ dài
  strings.forEach(str => {
      const len = str.length;
      lengthMap[len] = (lengthMap[len] || 0) + 1;
  });

  // Tìm độ dài xuất hiện nhiều nhất
  const maxFreq = Math.max(...Object.values(lengthMap));
  const mostFrequentLengths = Object.keys(lengthMap).filter(
      len => lengthMap[len] === maxFreq
  );

  // Tìm các chuỗi có độ dài xuất hiện nhiều nhất
  return strings.filter(str => mostFrequentLengths.includes(str.length.toString()));
}

// Test Cases
console.log(findMostFrequentStringLength(['a', 'ab', 'abc', 'cd', 'def', 'gh'])); // ['ab', 'cd', 'gh']
// console.log(findMostFrequentStringLength(['abc', 'abcd', 'a', 'b', 'ef'])); // ['a', 'b', 'ef']
// console.log(findMostFrequentStringLength([])); // []