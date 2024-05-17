const repeatString = function(str, repeatAmount) {
  newString = ''
  if(repeatAmount < 0){
    return "ERROR"
  } else if(repeatAmount == 0){
    return ""
  } else {
    for(let i = 0; i < repeatAmount; i++){
      newString += str
    }
    return newString
  }
};

// Do not edit below this line
module.exports = repeatString;
