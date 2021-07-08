let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 85;

markHigherBMI =
  markMass / (markHeight * markHeight) > johnMass / (johnHeight * johnHeight);

console.log(markHigherBMI);
