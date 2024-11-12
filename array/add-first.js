const cars = ["Nissan" , "Volvo" , "BMW" , "toyota"];


let result = "audi"
for (let i = cars.length; i >0; i--) {
    cars[i] = cars[i - 1];
}
cars[0]=result
console.log(cars);







