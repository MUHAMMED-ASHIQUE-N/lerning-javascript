function isPrimeOrNot(num){

    let  asn = " is  a prime number"
    let  asn1 = " is not  a prime number "
       if (num===2|| num===3 || num===7){
           return asn
       } else if (num%2===0 || num%3===0 || num%7===0){
           return asn1
       } else{
           return asn
       }
       
   }
   
   let inputnum =1
   
   
   
   5 ;
   let result = isPrimeOrNot(inputnum);
   console.log(inputnum +result);
   



