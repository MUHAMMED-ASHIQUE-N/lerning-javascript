function findFactorial(number){
    if (number<0){
      return   console.log("negative does not have factorial")
    }else if (number===0 ||number===1){
      return  console.log("factorial of number"+number+"= '1'")
    }else {
      let  fact = 1
        for(let i=1;i<=number;i++){
            fact=fact*i
          
        }
        return fact
    }


}
number = 5
result = findFactorial(number)

console.log("factorial of number "+number+" = "+result);





