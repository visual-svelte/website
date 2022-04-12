import { range } from "d3";

function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let groups = "abcdefghijkl".split("").map((letter) => ({
  letter,
  data: range(0, randBetween(5, 10)).map((d, i) => ({
    id: `${letter}-${i}`,
    value: randBetween(2, 20),
  })),
}));

export default groups;
