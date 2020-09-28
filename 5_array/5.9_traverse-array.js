var list = [ 
    "sun", //0 = -7
    "mon", //1 = -6
    "tue", //2 = -5
    "wed", //3 = -4
    "thu", //4 = -3
    "fri", //5 = -2
    "sat" //6 = -1
];

// for(var i = 0; i<list.length; i++){
//     console.log("Element at",i,"offset is",list[i]);
// }

var length = list.length;
for(var i = 0; i<length; i++){
    console.log("Element at",i,"offset is",list[i]);
}

//Reverse mode
for(var i = length-1; i>=0; i--){
    console.log("\nElement at",i,"offset is",list[i],"\n");
}


//Alternative way
for(i in list){
    console.log("Element at",i,"offset is",list[i]);
}