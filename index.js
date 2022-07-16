pipe = (...functions) => (value) => {
  return functions
    .reduce((currentValue, currentFunction) => {
       return currentFunction(currentValue);
    }, value)
};

compose = (...functions) => (value) => {
  return functions
    .reduceRight((currentValue, currentFunction) => {
       return currentFunction(currentValue);
    }, value)
};

module.exports = {pipe, compose};