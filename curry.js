Function.prototype.curry = function(numArgs) {

  const arr = [];
  const that = this;
  let total = 0;
  // Figure out numArgs toget the count working

  function callbackFunction(num) {
    arr.push(num);


    if (arr.length === numArgs) {
      total = that.apply(that, arr);
      return total;
      }

      else {
        return callbackFunction;
      }
    }

  return callbackFunction;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree(4, 20, 6)); // == 30

// you'll write `Function#curry`!

console.log(sumThree.curry(3)(4)(20)(6)); // == 30
