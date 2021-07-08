let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 85;
let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);
markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}
