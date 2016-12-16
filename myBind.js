
Function.prototype.myBind = function(context) {
  let args = Array.prototype.slice.call(arguments);
  args = args.slice(1);

  const that = this;
  return function() {
    let args2 = Array.prototype.slice.call(arguments);
      that.apply(context, args.concat(args2));
  };
};

// Markov says meow to Ned!
// args1: meow,Kush--- args2:
// args1: --- args2: meow,a tree
// args1: meow--- args2: Markov
// args1: --- args2: meow,me

Function.prototype.myBind2 = function(context, ...args) {
  return (...args2) => this.apply(context, args.concat(args2));
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const boundMarkov = markov.says.myBind(breakfast);
boundMarkov("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true
