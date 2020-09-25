//s0 = 1 2 3 4 5 6 7 8 9.....

//s1 = 2 4 6 8 10 12 14......
var series = "";
var n;
for(var i=1; i<10; i++){
    n = i * 2;
    series = series + n +" ";
}
console.log("s1:",series);

//s2 = 1 4 7 10 13 16 ....
series = "1 ";
n = 1;
for(var i=1; i<10; i++){
    n = n + 3;
    series = series + n + " ";
}
console.log("s2:",series);


//s3 = 0 3 8 15 24 25 48 ....
series = "";
for(var i=1; i<10; i++){
    n = i*i-1;
    series = series + n + " ";
}
console.log("s3:",series);


//s4 = 1 4 3 8 5 12 7 16 9 20 ...
series = "";
for(var i=1; i<10; i++){
    n = i;
    if(n%2 == 0){
        n = i * 2;
    }
    series = series + n + " ";
}
console.log("s4:",series);


//s5 = 0 1 1 2 3 5 8 13 21 ...
series = "0 1 ";
n = 0;
var x = 0;
var y = 1;

for(var i = 1; i<10; i++){
    n = x+y;
    x = y;
    y = n;
    
    series = series + n + " ";
}
console.log("s5:",series);

