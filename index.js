const people = {
  Alex: {
    height: 173,
    weight: 92,
  },
  Larry: {
    height: 153,
    weight: 87,
  },
};

function calcAverageHeight(data) {
  const peopleArr = Object.values(data);
  return peopleArr[0].height;
}

console.log("Initial data: ", people);
console.log("Average height: ", calcAverageHeight(people));

exports.calcAverageHeight = calcAverageHeight;
