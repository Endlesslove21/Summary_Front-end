Câu 1:
Question 1: What are the differences between "null" and "undefined" ?
null:

- a special value which represents "nothing", "emty" or "value unknown"
- typeof: object

undefined:

- the meaning that is "value is not assigned"
- typeof: undefinded

Question 2: What are the differences between "document.ready" and "body.onload" ?

- document.ready: this event is triggered as soon as the DOM is ready. it can be use to execute code as soon as the DOM is ready to be manipulated

- body.onload: this event triggerd only when the entire page has finished loading. useful for scripts that rely on specific content being present on the page

Q3:What are the differences between "call" and "apply" ?

- call(thisArg, arg1, arg2, ...): accept an object as the first arg "thisArg" and then pass the arguments to the function as individual params.
  EX:
  const myFunction = (arg1, arg2) =>{
  console.log(arg1 + arg2 );
  }
  myFunction.call(this, 1 , 2);

- apply(thisArg, [arg1, arg2, ...]): accept an object as the first arg "thisArg" and then pass the arguments to the function as an array
  EX:
  const myFunction = (arg1, arg2) =>{
  console.log(arg1 + arg2 );
  }
  myFunction.call(this, [1, 2]);

Q4: What is anonymous function? when shoud i use it?

Defination: a function doesn't have a name. It's assigned to a variable or passed as a parameter to another function

Use case:

- As a callback function: can be passed as params to other functions
  EX: setTimeout(function() {
  console.log("Hello world");
  }, 1000)

- As a closure: Anonymous func can be used to create closures, which allow inner funcs to access the variables of their outer functions
  EX: function add(x) {
  return function(y) {
  return x + y;
  }
  }
  var add5 = add(5);
  console.log(add(3)) // return 8

- As a one-time-use function: can be use when use only need to use a func once and dont need to give it a name
  EX: var sum = (function(x, y) {
  return x + y;
  })(2,3);
  console.log(sum);

Q5: What is asynchoromous in js?
DEFINATION: allow other code to execute while waiting for an operation to complete.
Use for response and performant web app

- setTimeout
- call api
- promise

Q6: Strict mode in Js ?

- prevents undeclared variables
- eliminates silent errors: asigning a value to a read-only property, strict mode throwing TypeError
- disables some global variables
