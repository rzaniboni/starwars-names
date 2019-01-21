const uniqueRandomArray = require("unique-random-array");
const startWarsNames = require("./starwars-names.json");
const formatList = require("./formatList");

module.exports = {
  all: startWarsNames,
  random: random,
  firstFive: firstFive,
  formatfirstFive: formatfirstFive
};

function firstFive() {
  const result = startWarsNames.slice(0, 5);
  return result;
}

function formatfirstFive() {
  return formatList("lista", firstFive());
}

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
