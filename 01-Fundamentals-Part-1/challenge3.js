let Dscore1 = 123;
let Dscore2 = 1234;
let Dscore3 = 234;
let Kscore1 = 123;
let Kscore2 = 1234;
let Kscore3 = 234;

let Dolphins = (Dscore1 + Dscore2 + Dscore3) / 3;
let Koalas = (Kscore1 + Kscore2 + Kscore3) / 3;

if (Dolphins < Koalas && Koalas >= 100) {
  console.log(`Koalas wins`);
} else if (Dolphins < Koalas && Dolphins >= 100) {
  console.log(`Dophins wins`);
} else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
  console.log(`Both win the trophy!`);
} else {
  console.log(`No one wins the trophy`);
}
