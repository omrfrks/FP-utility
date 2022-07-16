const pipe = (...functions) => (value) => {
  return functions
    .reduce((currentValue, currentFunction) => {
       return currentFunction(currentValue);
    }, value)
};

const compose = (...functions) => (value) => {
  return functions
    .reduceRight((currentValue, currentFunction) => {
       return currentFunction(currentValue);
    }, value)
};

const findPropIn = (propName,obj) => {
  if (obj == undefined || typeof obj != "object") return;

  if (propName in obj) {
      return obj[propName];
  }
  else {
      for (let prop of Object.keys( obj )) {
          let ret = findPropIn( propName, obj[prop] );
          if (ret !== undefined) {
              return ret;
          }
      }
  }
}

module.exports = {pipe, compose, findPropIn};