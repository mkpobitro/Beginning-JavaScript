
// একটা সংখার গুননীয়ক গুলো বের করা 
var n = 144;
var range = Math.ceil(Math.sqrt(n));

var divisors = "";

for(var i=1; i<=range; i++){
    if(n%i==0){
        divisors = divisors + i + " " + (n/i)+ " ";
    }
}
console.log(divisors);