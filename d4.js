function searchDigits(start, end) {
  let matches = 0;
  for (let num = start; num <= end; num++) {
    let current = num.toString();
    if(doesIncrease(current, 0) && hasDouble(current, 0)) {
      matches++;
    }
  }
  return matches;
}

function searchDigitsUpdated(start, end) {
  let matches = 0;
  for (let num = start; num <= end; num++) {
    let current = num.toString();
    if(doesIncrease(current) && hasDoubleNoRepeat(current)) {
      matches++;
    }
  }
  return matches;
}

function doesIncrease(num){
  for (var i = 0; i < num.length; i++) {
    let current = parseInt(num[i]);
    let prev = null;
    let prevprev = null;
    if(i>0){
      prev = parseInt(num[i-1]);
    }
    if(prev > current){
      return false;
    }
    else if(i===5){
      return true;
    }
  }
}

function hasDouble(num) {
  for (var i = 0; i < num.length; i++) {
    let current = parseInt(num[i]);
    let prev = null;
    if(i>0){
      prev = parseInt(num[i-1]);
    }
    if(prev === current){
      return true;
    }
  }
  return false;
}

function hasDoubleNoRepeat(num) {
  for (var i = 0; i < num.length; i++) {
    let current = parseInt(num[i]);
    let prev = null;
    let prev2 = null;
    let next = parseInt(num[i+1]);
    if(i>0){
      if(i>1){
          prev2 = parseInt(num[i-2]);
      }
      prev = parseInt(num[i-1]);
    }
    if(prev === current
    && prev2 != current
    && next != current) {
      return true;
    }
  }
  return false;
}

console.log(`Day 4 Pt. 2: ${searchDigitsUpdated(171309, 643603)}`);
console.log('Day 4: ' + searchDigits(171309, 643603));
