function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descIndia = describeCountry("India", 1324, "Delhi");
const descFrance = describeCountry("France", 134, "Paris");
const descJapan = describeCountry("Japan", 21, "Tokyo");

console.log(descIndia, descFrance, descJapan);

function percentageOfWorld1(population) {
  return population / 79;
}

const percentageOfWorld2 = function (population) {
  return population / 79;
};

let perIndia = percentageOfWorld1(1324);
let perFrance = percentageOfWorld1(134);
let perJapan = percentageOfWorld1(21);

console.log(perIndia, perFrance, perJapan);

perIndia = percentageOfWorld2(1324);
perFrance = percentageOfWorld2(134);
perJapan = percentageOfWorld2(21);

console.log(perIndia, perFrance, perJapan);

const percentageOfWorld3 = (population) => {
  return population / 79;
};

perIndia = percentageOfWorld3(1324);
perFrance = percentageOfWorld3(134);
perJapan = percentageOfWorld3(21);

console.log(perIndia, perFrance, perJapan);

const describePopulation = (country, population) => {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )} of the world.`;
};

console.log(describePopulation("India", 1397));
console.log(describePopulation("China", 1441));
console.log(describePopulation("Japan", 21));

const populations = [1441, 1329, 21, 134];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

const neighbours = ["Pakistan", "China", "Bangladesh"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log(`Probably not a central European country :D`);
}

neighbours[neighbours.indexOf("Pakistan")] = "United States";
console.log(neighbours);

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1384,
  neighbours: ["China", "Nepal", "Bangladesh"],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry);

myCountry["population"] -= 2;
console.log(myCountry);

const myCountry2 = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 1384,
  neighbours: ["China", "Nepal", "Bangladesh"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = !Boolean(this.neighbours.length);
  },
};

myCountry2.describe();
myCountry2.checkIsland();
console.log(myCountry2);

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
  percentages2[i] = percentageOfWorld1(populations[i]);
}

console.log(percentages, percentages2);

listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    const element = listOfNeighbours[i][j];
    console.log("Neighbour:", element);
  }
}

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3[i] = percentageOfWorld1(populations[i]);
  i++;
}

console.log(percentages, percentages3);
