const country = "India";
const continent = "Asia";
let population = 1378;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Hindi";

console.log(population / 2);
console.log(population + 1);
console.log(population > 6);
console.log(population < 33);

let desription =
  country +
  " is in " +
  continent +
  " and its " +
  population +
  " million people speak " +
  language;

desription = `${country} is in ${continent} and its ${population} million people speak ${language}`;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
}

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

// let numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// if (numNeighbours == 1) console.log("Only 1 border!");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("No borders");

// if (numNeighbours === 1) console.log("Only 1 border!");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("No borders");

if (language == "English" && population < 50 && isIsland == false) {
  console.log("You should live in India:)");
} else {
  console.log("India does not meet your criteria :(");
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log(`Most number of native speakers!`);
    break;
  case "spanish":
    console.log(`2nd number in place of native speakers`);
  case "english":
    console.log(`3rd place`);
  case "hindi":
    console.log(`Number 4`);
  case `arabic`:
    console.log(`5th spoken language`);
  default:
    console.log(`Great language too :D`);
    break;
}

console.log(
  `India's population is ${population > 13 ? `above` : `below`} average`
);
