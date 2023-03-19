const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sorted age
const sort = ages.sort();
console.log("Sorted Age : ", sort);

// Minimum age
const minAge = Math.min.apply(Math, ages);
console.log("Min Age : ", minAge);

// Maximum age
const maxAge = Math.max(...ages);
console.log("Max Age : ", maxAge);

// Median Age
let median;
if (sort.length % 2 !== 0) {
  median = Math.ceil(sort.length / 2);
  console.log("Median Age : ", sort[median]);
} else {
  medianFloor = Math.floor(sort.length / 2);
  medianCeil = Math.ceil(sort.length / 2);

  let finalMedian = (medianFloor + medianCeil) / 2;
  console.log("Median Age : ", sort[finalMedian]);
}

// Average age
const sum = ages.reduce((acc, currElem, index, ages) => {
  return acc + currElem;
});
const avgAge = sum / ages.length;
console.log("Average Age :", avgAge);

// Range of ages
let range = maxAge - minAge
console.log(range)


// Compare age
if (minAge - avgAge > maxAge - avgAge) {
  const newVal = Math.abs(minAge - avgAge).toFixed(2);
  console.log("minAge - avgAge : ", newVal);
} else {
  const newVal = Math.abs(maxAge - avgAge).toFixed(2);
  console.log("maxAge - avgAge : ", newVal);
}
