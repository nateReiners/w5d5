function sum1() {
  let numbers = Array.prototype.slice.call(arguments);
  let total = 0;

  numbers.forEach(function(num) {
    total += num;
  });

  return total;
}

function sum2(...nums) {
  let total = 0;

  nums.forEach(function(num) {
    total += num;
  });

  return total;
}
