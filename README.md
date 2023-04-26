# calculate-average-height

## Task

Write a function, which receives an object as an input parameter. The input parameter contains names of people as keys and objects as values.
These objects have a height key, which has a value showing the person's height. The typical input looks like this:

```
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
```

if you call the function, it supposed to give back the average height of the people as a number.

```
console.log("Average height: ", calcAverageHeight(people)); //expected result 163
```

If you call the function without input or faulty input you should get null back.

## Technology

The function is developed by TDD. The applied technology is Node, the testrunner is Jest.

## Usage

The current stable version of [Node](https://nodejs.org/en) should be installed. Clone the app with the following command:

```
git clone git@github.com:AlexErdei73/calculate-average-height.git
```

Install the node modules:

```
npm install
```

You can run the index.js file by:

```
node index
```

You can also run the tests by:

```
npm run test
```
