var myList = ["apple","orange","banana"];

myList[myList.length] = "grape"; //add last element
myList.push("pineapple"); // add last element
myList.unshift("plum"); // add first element

console.log("Before Length:",myList.length);

myList.shift(); // remove first element
myList.pop(); // remove last element

console.log(myList);
console.log("After Length:",myList.length);