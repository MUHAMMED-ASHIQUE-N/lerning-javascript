const cars = ["Nissan" , "Volvo" , "BMW" , "toyota"];

for (let i = 0; i <=cars.length-1; i++) {
    cars[i]=cars[i+1]
    
}
cars.length=cars.length-1
console.log(cars);


