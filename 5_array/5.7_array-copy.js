
var list = [ 
    "sun", //0 = -7
    "mon", //1 = -6
    "tue", //2 = -5
    "wed", //3 = -4
    "thu", //4 = -3
    "fri", //5 = -2
    "sat" //6 = -1
];

// var list2 = list;
// list[1] = "No day";
// list2[3] = "no holiday";

var list2 = list.slice(); //standard way
// var list2 = [...list]; // es6
// var list2 = Array.from(list); //old way
list2[0] = "holiday";

console.log(list,list2);