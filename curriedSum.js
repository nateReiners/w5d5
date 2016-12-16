function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(num) {
    numbers.push(num);
    let total = 0;
    console.log(numbers);

    if (numbers.length === numArgs) {
      numbers.forEach(function(n) {
        total += n;
        console.log(total);
      });
      console.log(total);
      return total;
    }

    else {
      console.log(_curriedSum);
      return _curriedSum;
    }
  }

  return _curriedSum;
}

const sum = curriedSum(4);
sum(5)(30)(20)(1);
