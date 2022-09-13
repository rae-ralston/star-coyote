const { v4: uuidv4 } = require("uuid");
const getRandomInt = require("./get-random-int");

const prependDaily = (e) => generateDaily(e?.target[0]?.value, 0);

const generateDaily = (name, index) => ({
  id: uuidv4(),
  name,
  checked: false,
  index,
});

const todos = [
  "brush your teeth",
  "make the bed",
  "go for a walk",
  "walk the dog",
  "do the dishes",
  "exercise",
  "meditate for 5 min",
  "read for 15 minutes",
  "journal for 10 minutes",
  "tidy for 10 minutes",
  "shower",
  "wash your face",
  "play with the kids",
  "draw a picture",
  "go hiking",
];

const defaultDailies = (num = 5) => {
  return Array(num)
    .fill("r")
    .map((_, index) => {
      return generateDaily(todos[getRandomInt(todos.length)], index);
    });
};

module.exports = {
  defaultDailies,
  prependDaily,
  generateDaily,
};