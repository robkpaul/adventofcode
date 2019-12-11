function searchDigits(start, end) {
  let matches = 0;
  for (let num = start; num <= end; num++) {
      let current = num.toString();
      }
      if(hasDouble(current) && double){
        matches++;
      }
      prev = current;
    }
    }
  return matches;
}
function doesIncrease(number, prev){
  if(number.length === 0){
    return true;
  }
  let current = parseInt(number[0]);
  if(current < prev){
    return doesIncrease(number[1], current);
  }
  else{
      return false;
  }
}
function hasDouble(number, prev) {
    if(number.length === 0){
        return false;
    }
    let current = parseInt(number.toString()[0]);
    if(number === prev){
        return true;
    }
    else{
        return hasDouble(number[1], current);
    }
}
console.log(searchDigits(171309, 643603));
