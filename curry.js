Function.prototype.curry = function(numArgs) {

  const arr = [];
  const that = this;
  let total = 0;

  function callbackFunction(arg) {
    arr.push(arg);

    if (arr.length === numArgs) {
      return that.apply(that, arr);
      } else {
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
