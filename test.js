// // where a is most recent
let a = 26;
let b = 28;
let c = 26;
let d = 25;
let e = 22;
let f = 16;

const getRate = function(num1, num2, num3, num4, num5, num6) {
  let first = num1 - num2;
  let second = num2 - num3;
  let third = num3 - num4;
  let fourth = num4 - num5;
  let fifth = num5 - num6;
  let rate = (first + second + third + fourth + fifth) / 5;
  if (rate > 0) {
    let pos = ["+", rate.toFixed(2)];
    return pos.join("");
  } else {
    return rate.toFixed(2);
  }
};

const asiagoRate = getRate(a, b, c, d, e, f);
// console.log(asiagoRate);

console.log(Math.round(parseInt(asiagoRate) + 1.9));
