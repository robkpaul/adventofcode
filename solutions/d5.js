const m_POSITION = 0;
const m_IMMEDIATE = 1;

const m_CURRENT = m_IMMEDIATE;

const c_ADD = 1;
const c_MULT = 2;
const c_SAVE = 3;
const c_OUTPUT = 4;
const c_JUMP_IF_TRUE = 5;
const c_JUMP_IF_FALSE = 6;
const c_LESS_THAN = 7;
const c_EQUALS = 8;
const c_HALT = 99;

const input = 5;

let increment = 4;

let opcode = [
  3,225,1,225,6,6,1100,1,238,225,104,0,1101,40,27,224,101,-67,224,224,4,224,1002,223,8,223,1001,224,2,224,1,224,223,223,1101,33,38,225,1102,84,60,225,1101,65,62,225,1002,36,13,224,1001,224,-494,224,4,224,1002,223,8,223,1001,224,3,224,1,223,224,223,1102,86,5,224,101,-430,224,224,4,224,1002,223,8,223,101,6,224,224,1,223,224,223,1102,23,50,225,1001,44,10,224,101,-72,224,224,4,224,102,8,223,223,101,1,224,224,1,224,223,223,102,47,217,224,1001,224,-2303,224,4,224,102,8,223,223,101,2,224,224,1,223,224,223,1102,71,84,225,101,91,40,224,1001,224,-151,224,4,224,1002,223,8,223,1001,224,5,224,1,223,224,223,1101,87,91,225,1102,71,19,225,1,92,140,224,101,-134,224,224,4,224,1002,223,8,223,101,1,224,224,1,224,223,223,2,170,165,224,1001,224,-1653,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1101,49,32,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,1107,226,677,224,1002,223,2,223,1006,224,329,101,1,223,223,8,226,226,224,1002,223,2,223,1005,224,344,101,1,223,223,1007,677,226,224,102,2,223,223,1005,224,359,101,1,223,223,8,226,677,224,102,2,223,223,1005,224,374,101,1,223,223,1107,677,677,224,1002,223,2,223,1005,224,389,1001,223,1,223,108,226,677,224,102,2,223,223,1005,224,404,1001,223,1,223,108,677,677,224,1002,223,2,223,1006,224,419,101,1,223,223,107,677,677,224,102,2,223,223,1006,224,434,101,1,223,223,108,226,226,224,1002,223,2,223,1006,224,449,1001,223,1,223,8,677,226,224,1002,223,2,223,1005,224,464,101,1,223,223,1108,226,677,224,1002,223,2,223,1006,224,479,1001,223,1,223,1108,677,677,224,1002,223,2,223,1005,224,494,101,1,223,223,7,677,677,224,1002,223,2,223,1005,224,509,101,1,223,223,1007,677,677,224,1002,223,2,223,1005,224,524,101,1,223,223,7,677,226,224,1002,223,2,223,1005,224,539,101,1,223,223,1107,677,226,224,102,2,223,223,1006,224,554,101,1,223,223,107,226,677,224,1002,223,2,223,1005,224,569,101,1,223,223,107,226,226,224,1002,223,2,223,1005,224,584,101,1,223,223,1108,677,226,224,102,2,223,223,1006,224,599,1001,223,1,223,1008,677,677,224,102,2,223,223,1006,224,614,101,1,223,223,7,226,677,224,102,2,223,223,1005,224,629,101,1,223,223,1008,226,677,224,1002,223,2,223,1006,224,644,101,1,223,223,1007,226,226,224,1002,223,2,223,1005,224,659,1001,223,1,223,1008,226,226,224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226
];

function splitCode(code) {
  return {
    operator: parseInt(code%100),
    param1: parseInt((code/100)%10),
    param2: parseInt(code/1000)%10,
    param3: parseInt(code/10000)
  }
}

function retrieveValue(val, m) {
  switch (m) {
    case m_IMMEDIATE:
    return val;
    break;
    case m_POSITION:
    return opcode[val];
    break;
  }
}

function airConditionerComputer() { //part 1
  let halt = false;
  for (let i = 0; i < opcode.length; i+=increment) {
    split = splitCode(opcode[i]);
    switch (split.operator) {
      case c_ADD:
      opcode[opcode[i+3]] = retrieveValue(opcode[i+1], split.param1) + retrieveValue(opcode[i+2], split.param2);


      increment = 4;
      break;
      case c_MULT:
      opcode[opcode[i+3]] = retrieveValue(opcode[i+1], split.param1) * retrieveValue(opcode[i+2], split.param2);

      increment = 4;
      break;
      case c_SAVE:
      opcode[opcode[i+1]] = input;
      increment = 2;
      break;
      case c_OUTPUT:
      console.log(retrieveValue(opcode[i+1], split.param1))

      increment = 2;
      break;
      default:
      if(split.operator !== c_HALT){
        throw `Expected opcode, got ${split.operator}`;
      }

      halt = true;
      break;
    }
    if(halt){
      break;
    }
  }
}
function thermalRadiatorComputer() {
  let halt = false;
  for (let i = 0; i < opcode.length; i+=increment) {
    split = splitCode(opcode[i]);
    switch (split.operator) {
      case c_ADD:
        opcode[opcode[i+3]] = retrieveValue(opcode[i+1], split.param1) + retrieveValue(opcode[i+2], split.param2);

        increment = 4;
      break;
      case c_MULT:
        opcode[opcode[i+3]] = retrieveValue(opcode[i+1], split.param1) * retrieveValue(opcode[i+2], split.param2);

        increment = 4;
      break;
      case c_SAVE:
        opcode[opcode[i+1]] = input;

        increment = 2;
      break;
      case c_OUTPUT:
        console.log(retrieveValue(opcode[i+1], split.param1))

        increment = 2;
      break;
      case c_JUMP_IF_TRUE:
        if(split.param1!==0){
          i = retrieveValue(opcode[i+2], split.param2);
          increment = 0;
          break
        }
        increment = 4;
      break;
      case c_JUMP_IF_FALSE:
        if(split.param1===0){
          i = retrieveValue(opcode[i+2], split.param2);
          increment = 0;
          break
        }
        increment = 4;
      break;
      case c_LESS_THAN:
        if(retrieveValue(opcode[i+1], split.param1) < retrieveValue(opcode[i+1], split.param1)){
          opcode[opcode[i+3]] = 1;
          increment = 4;
          break;
        }
        opcode[opcode[i+3]] = 0;
        increment = 4;
      break;
      case c_EQUALS:
        if(retrieveValue(opcode[i+1], split.param1) === retrieveValue(opcode[i+1], split.param1)){
          opcode[opcode[i+3]] = 1;
          increment = 4;
          break;
        }
        opcode[opcode[i+3]] = 0;
        increment = 4;
        break;
      default:
      if(split.operator !== c_HALT){
        throw `Expected opcode, got ${split.operator}`;
      }

      halt = true;
      break;
    }
    if(halt){
      break;
    }
  }
}
