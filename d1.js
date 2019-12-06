const moduleWeights = [129192,
58561,
57267,
95382,
84995,
127372,
93598,
97264,
138550,
79327,
135661,
139468,
108860,
149642,
72123,
128333,
69002,
98450,
86267,
70171,
101333,
79822,
142539,
142743,
51371,
111381,
62073,
72210,
125168,
135952,
131060,
121842,
88234,
146774,
136571,
126719,
50644,
75696,
51195,
77171,
118052,
83691,
133779,
149814,
64847,
110697,
92695,
59453,
139517,
129487,
79271,
97896,
146987,
149822,
71866,
90797,
104732,
54997,
50139,
134115,
133017,
144979,
89428,
124750,
91833,
57252,
67195,
121624,
102706,
138245,
127700,
124098,
110382,
121557,
103613,
133576,
122801,
112306,
120203,
134696,
76129,
84576,
80854,
147237,
71025,
127513,
143631,
125090,
115698,
57979,
84880,
120177,
147389,
88380,
114688,
56355,
126265,
58220,
63523,
130179];

function simpleFuelCalc(weight) {
    return Math.floor(weight/3)-2
}

function advFuelCalc(weight){
  if(weight <= 0){
    return 0;
  }
  return weight+advFuelCalc(simpleFuelCalc(weight));
}

function partOne(modules) {
  let total = 0;
  for (let mod in modules) {
      total+=simpleFuelCalc(modules[mod]);
  }
  return total;
}

function partTwo(modules){
  let total = 0;
  for (let mod in modules){
      total+=advFuelCalc(simpleFuelCalc(modules[mod]));
  }
  return total;
}

document.querySelector('.output--d1simple').innerText = partOne(moduleWeights);
document.querySelector('.output--d1adv').innerText = partTwo(moduleWeights);
