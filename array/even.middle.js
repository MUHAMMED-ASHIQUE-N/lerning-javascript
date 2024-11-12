


const cars = ["Saab", "Volvo","hjjhh", "BMW", "toyota", "BENZ"];


const  equation  = Math.floor((cars.length-1)/2);

for (let i =equation;i<cars.length-1;i++){
    cars[i]=cars[i+2]
}
cars.length=cars.length-2
console.log(cars);





