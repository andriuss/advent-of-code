const fs = require("fs");
const input = fs.readFileSync("./day1.txt", "utf8");

const calcFuel = amount => {
  if (amount <= 0) {
    return 0;
  }
  const res = Math.floor(amount / 3) - 2;
  if (res <= 0) {
    return 0;
  }
  return res + calcFuel(res);
};

const res = input
  .split(/\n/)
  .reduce((acc, cur) => acc + calcFuel(parseInt(cur, 10)), 0);

console.log({ res });
