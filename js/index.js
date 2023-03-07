console.log(typeof NULL);

//test anonymous functions
function add(x) {
  return function (y) {
    return x + y;
  };
}

let add5 = add(5);
console.log(add5);

let sum = (function (x, y) {
  return x + y;
})(2, 3);

console.log(sum);
