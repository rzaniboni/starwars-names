const uniqueRandomArray = require("unique-random-array");
const startWarsNames = require("./starwars-names.json");

module.exports = {
  all: startWarsNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

function getRandomItem() {
  return uniqueRandomArray(startWarsNames)();
}
