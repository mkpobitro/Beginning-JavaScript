
var i;
for(i = 0; i <= 10; i++){
    console.log(i);
}   

console.log("\n:Infinite looping with breaking \n")
//==========infinite looping with breaking ============

var i = 0;

for (;; i++){
    console.log(i);
    
    if( 15 == i){
        break;
    }
}