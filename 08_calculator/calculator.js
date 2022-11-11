const add = function(...args) {
  const result = args.reduce((result, item)=> {
    return result += item
  })
  return result
};

const subtract = function(a,b) {
  return a-b
};

const sum = function(arg) {
	const result = arg.reduce((result, item)=> {
    return result += item
  },0)
  return result
};

const multiply = function(arg) {
  const result = arg.reduce((result, item)=> {
    result === 0
      ? result = item
      : result = result * item
    return result
  },0)
  return result
};

const power = function(a,b) {
	let result = 0
  for (let i=0; i < b; i++){
    result === 0
      ? result = a
      : result = result * a
  }
  return result
};

const factorial = function(arg) {
	if (arg === 0) {
    return 1
  }
  const arrFactorial = []
  for (let i=1; i <= arg; i++) {
    arrFactorial.push(i)
  }
  const result = arrFactorial.reduce((result, item)=> {
    return result = result * item
  },1)
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
