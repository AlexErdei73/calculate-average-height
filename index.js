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
  const sum = peopleArr.reduce(
    (prevValue, nextPerson) => prevValue + nextPerson.height,
    0
  );
  return peopleArr && peopleArr.length > 0 ? sum : null;
}

console.log("Initial data: ", people);
console.log("Average height: ", calcAverageHeight(people));

exports.calcAverageHeight = calcAverageHeight;
