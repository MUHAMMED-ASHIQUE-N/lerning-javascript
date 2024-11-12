// print hellow world


function hello(){
    console.log("Hello world");
}
hello();


// print sum of  two number

function add(x, y) {
    let sum = x+y
   return sum;
   }
   var x=add(4, 5)
   
   console.log(x);
   
// print square of a number

function square(x){
    var sqr = x*x;
    return sqr;
   }
    var sqr = square(5);
   console.log(sqr);


//   convert Celsius To Fahrenheit


function convertCelsiusToFahrenheit(c){
  
   return (c*1.8) + 32;
   
}
 let fahrenheit = convertCelsiusToFahrenheit(5)
console.log(fahrenheit);




// substract two number


function calculate(x, y){
   var  sub = x-y;
   return sub;

  
}

let result =calculate(10, 7)


console.log(result);




// find area of rectangle


function area2(lenght, width){
    return lenght * width;
}
let f = area2(10,10)
console.log(f);



function area1(lenght, width){
    let ar= lenght * width;
    console.log(ar)  
}

area1(4, 2)




