//linear search;

const linearSearchNumbers = () => {
  const numbers = [20, 40, 60, 87, 90, 95];
  const guess = 90;

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === guess) {
      console.log("Found");
      break;
    }
    console.log("Not found");
  }
};

const linearSearchStrings = () => {
  const number = "lettuce";
  const items = [
    "apple",
    "pear",
    "banana",
    "berry",
    "blueberry",
    "strawberry",
    "lettuce",
  ];
  for (let index = 0; index < items.length; index++) {
    if (items[index] === number) {
      console.log("Found");
      break;
    }
    console.log("Not found item");
    continue;
  }
}

