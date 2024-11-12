let pattern = ""
let n = 5 
for (let row =1 ;row <=2*n-1;row++){
    let totalNoOfstar = row>=n? (row-n)+1:n;
    let colNumber = row >= n? 1 : row ;

    for(let col=colNumber;col<=totalNoOfstar;col++){
        pattern+="* "
    }

pattern+="\n"
}
console.log(pattern);