


const cars = ["Saab", "Volvo", "BMW", "toyota", "BENZ"];


const  equation  = Math.floor(cars.length/2);

for (let i =equation;i<cars.length-1;i++){
    cars[i]=cars[i+1]
}
cars.length=cars.length-1
console.log(cars);












