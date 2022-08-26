import _ from "radash";

const fishs = [
  {
    name: "Marlin",
    source: "ocean",
    weight: 105,
  },
  {
    name: "Bass",
    source: "lake",
    weight: 16,
  },
];

const newFishes = _.objectify(
  fishs,
  (f) => f.name.toLowerCase(),
  (f) => _.pick(f, ["source", "weight"])
);

console.log(newFishes);