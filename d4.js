function searchDigits(start, end) {
  let matches = 0;
  for (let num = start; num <= end; num++) {
    for (let j = 0, prev = 0, double = false; j < 6; j++){
      let current = parseInt(num.toString()[j]);
      if(!(current>=prev)){
        break;
      }
      else if(current===prev){
        double = true;
      }
      else if(j===5 && double){
        matches++;
      }
      prev = current;
    }
  }
  return matches;
}
function meetsRequirements(number, prev){
  if(number.length === 0){
    return true;
  }
  
}
console.log(searchDigits(171309, 643603));
