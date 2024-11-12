// heighest value of array


const num1 = [888, 7, 23, 322, 5, 999];

let result = num1[0]; 

for (let i = 1; i < num1.length; i++) {
    if (num1[i] > result) {
       result = num1[i]; 
    }
}

console.log( result);


// heighest value of middle 

 const num = [8, 7, 888, 666, 755, 62,564,45];

 let equation = Math.floor(num.length/2);
let a = num[equation]
let b = num[equation-1]

if (a>b){
    console.log(a);
    
}else{
    console.log(b);
    
}


