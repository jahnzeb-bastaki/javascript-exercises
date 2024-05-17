const sumAll = function(num1, num2) {
  let lowerBound = Math.min(num1, num2)
  let upperBound = Math.max(num1, num2)
  if(lowerBound < 0 || upperBound < 0){
    return 'ERROR'
  } else if(typeof num1 == "string" || typeof num2 == "string"){
    return 'ERROR'
  } else if(typeof num1 == "number" && typeof num2 == "number"){
    let sum = 0
    for(let i = lowerBound; i <= upperBound; i++){
      sum += i
    }
    return sum
  }
  return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
