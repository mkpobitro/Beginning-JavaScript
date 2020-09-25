// // while(condition){
// //     //loop body
// // }

// //1-10 পর্যন্ত যদি লুপের সাহায্যা প্রিন্ট করতে চাইলেঃ
// var i = 0;
// while(i < 10){
//     i++;
//     console.log(i)
// }

// //=============Another way=============
// var i = 0;
// while(true){
//     console.log(i);
//     if( 10 == i ){
//         break;
//     }
//     i++;
// }






// এরকম একটা প্রোগ্রাম লিখেন যেখানে, ১-১০ এর মধ্যে ২ দিয়ে ভাগ যায় সেগুলোকে প্রিন্ট করেন 
 
var i = 0;
while(i <= 10){
    if( i % 2 == 0){
        console.log(i)  
    }
    i++;
}

//=================== Easy way ====================
var i = 0;
while(i <= 10){
    console.log(i);
    i += 2;
}



