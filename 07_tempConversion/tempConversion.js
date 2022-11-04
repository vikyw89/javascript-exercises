const ftoc = (temp) => {
  let f = Math.round(((temp-32)/1.8)*10)/10
  return f
};

const ctof = (temp) => {
  let c = Math.round(((temp*1.8) + 32)*10)/10
  return c
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
