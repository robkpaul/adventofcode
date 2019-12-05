const { modules } = require('./d1Data.js')
let total = 0;
for (var i = 0; i < modules.length; i++) {
  total += Math.floor(distances[i]/3)-2;
}
document.querySelector('.output').innerText = total;
