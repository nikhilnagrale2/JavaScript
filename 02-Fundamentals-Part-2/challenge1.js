const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
  if (2 * avgDolphins <= avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else if (2 * avgKoalas <= avgDolphins) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No team wins...");
  }
}

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);
