// // Q.1Write one example explaining how you can write a callback function.
// function abc(a,b){
//     return a+b;
// }
//   function sum(name,num1){
//             console.log(name,num1);
//         }
//         sum("dipak",abc(5,3))

//Q.2 promise:- // Create a Promise, and check is the number even or ODD. and return the result on .then(Even) and .catch(Odd) method
// const promiseFunc = new Promise((resolve,reject)=>{
//     let N=4;
//  if(N%2===0){
//         resolve("even");
//     }
//     else{
//         reject("odd");
//     }
// })
//     promiseFunc .then((x)=>console.log(x))
//     .catch((err) =>console.log(err));
 
//method 2
// const promiseFunc(N) = new Promise((resolve,reject)=>{
//         let N=4;
//      if(N%2===0){
//             resolve("even");
//         }
//         else{
//             reject("odd");
//         }
//     })
//         promiseFunc .then((10)=>console.log(N))
//         .catch((err) =>console.log(err));


//         // Create a Promise, and pass two parameters, num1, and num2. if the multiplication
// of num1 and num2 is divisible by five, just return the product divisible by five in
// resolve statement else return Product not divisible by five in reject statements.

// const promiseFunc(num1,num2) = new Promise((resolve,reject)=>{
//             var product=num1*num2;
//          if(product%5===0){
//                 resolve("product divisible by 5");
//             }
//             else{
//                 reject("product not divisible by 5");
//             }
//         })
//             promiseFunc(10,15) .then((x)=>console.log(""))
//             .catch((err) =>console.log(err));

// "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

// Explain callback hell.
// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
//solution:-
let count=0
    setTimeout(()=>{
     console.log(++count);
     setTimeout(()=>{
        console.log(++count);
        setTimeout(()=>{
            console.log(++count); 
            setTimeout(()=>{
                console.log(++count);
                setTimeout(()=>{
                    console.log(++count);
                    setTimeout(()=>{
                        console.log(++count);
                        setTimeout(()=>{
                            console.log(++count);
                            
                            },7000);
                        
                        },6000 );
                    
                    },5000 );
                
                },4000 );
            
            },3000 );
        
        },2000 );

     },1000 );


//      "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
//   function print() { 
  
//     for(let i=1; i<=7; i++)
//     setTimeout(function(){
//         console.log(i);
//   },i*1000) 
// } print();



//Q.9 Create examples to explain promise.all function

let p1=()=>{
    return new Promise((res, rej)
    {
        setTimeout(()=>{
            function abc(a,b){
                    return a+b;
                }
                  function sum(name,num1){
                            console.log(name,num1);
                        }
                        sum("dipak",abc(5,3))
        },1000)
    })
}

let p2=()=>{
    return new Promise((res, rej)
    {
        setTimeout(()=>{
            const promiseFunc(N) = new Promise((resolve,reject)=>{
                
        },2000)
    })
}

let p3=()=>{
    return new Promise((res, rej)
    {
        setTimeout(()=>{
            res("Promise 3")
        },3000)
    })
}
Promise.all([p1(),p2(),p3()]) .then result=>{
    console.log (result)
    console.log (result)
}