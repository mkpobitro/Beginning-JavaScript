// // factorial
var n = 6;
var factorial = 1;

for(i=n; i>1; i--){
    factorial *= i;
}

console.log(factorial);

//যদি ১-১০ পর্যন্ত সংখ্যার factorial বের করতে বলা হয়। 

var n = 1;
for(j=n; j<=10; j++){
    factorial = 1;
    for(i=j; i>1; i--){
        factorial = factorial * i;
    }
    console.log("Factorial of ",i,"is", factorial);
}

// The best method
console.log("\n:The Best Method: \n");


var n = 1;
factorial = 1;
for(i=n; i<=10; i++){
    factorial *= i;
    console.log("Factorial of ",i,"is", factorial);
}