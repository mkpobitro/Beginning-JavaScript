
var list = [ 
    "sun", //0 = -7
    "mon", //1 = -6
    "tue", //2 = -5
    "wed", //3 = -4
    "thu", //4 = -3
    "fri", //5 = -2
    "sat" //6 = -1
];

var chunk = list.slice(3, 6);
var chunk2 = list.slice(-3,-1);

console.log(list,chunk,chunk2);