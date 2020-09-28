// String in Array
var stringList = [
    "b","f","a","c","k","x","m",
];
stringList.sort();
console.log(stringList);

// Numbers in Array
var numberList = [
  2,11,4,3,44,15,34,72,61,46,81  
];
numberList.sort();
console.log(numberList);


var length = numberList.length - 1;

for(var i=0; i<length; i++){
    for(var j=0; j<length; j++){
        if(numberList[j] > numberList[j+1]){
            [numberList[j], numberList[j+1]] = [numberList[j+1], numberList[j]]
        }
    }
}
console.log(numberList);