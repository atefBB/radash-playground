import _ from "radash";

const fish = [
  {
    name: "Marlin",
    source: "ocean",
    weight: 105
  },
  {
    name: "Bass",
    source: "lake",
    weight: 16
  }
];

const fishes = _.objectify(
  fish,
  (f) => f.name.toUpperCase(),
  (f) => _.pick(f, ["source", "weight"])
);

console.log(fishes);
