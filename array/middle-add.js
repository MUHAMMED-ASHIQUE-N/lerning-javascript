








const cars = ["Nissan" , "Volvo" , "BMW" , "toyota"];
let newValue = 3;
let a = Math.floor(cars.length/2); 


for (let i = cars.length; i > a; i--) {
    cars[i] = cars[i - 1];
}


cars[a] = newValue;

console.log(cars); 

