let pattern = ""
let n = 5 
for (let row =1 ;row <=n;row++){

    for(let col=1;col<=n;col++){
        pattern+="* "
    }

pattern+="\n"
}
console.log(pattern);





let pattern1 = ""
let n1 = 5
for (let row = 1; row <= n; row++) {

    for (let col = 1; col <= n; col++) {
        if (row == 1|| col==1|| n==row||n==col) {
            pattern1 += "* "
        }else{
            pattern1+="  "
        }

    }

    pattern1 += "\n"
}
console.log(pattern1);

