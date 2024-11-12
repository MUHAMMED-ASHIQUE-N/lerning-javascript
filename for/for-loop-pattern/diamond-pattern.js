
let pattern = ""
let n = 5
for (let row = 1; row <= 2 * n - 1; row++) {
    let totalNoOfstar = row > n ? 2 * n - row : row;
    let space = n - totalNoOfstar
    for (let spc = 1; spc <= space; spc++) {
        pattern += " "
    }
    for (let col = 1; col <= totalNoOfstar; col++) {
        if (row ===  n&& col===3) {
            pattern += "  "
        } else {
             pattern+="* "
        }

    }

    pattern += "\n"
}
console.log(pattern);







let pattern1 = ""
let n1 = 5 
for (let row =1 ;row <=2*n1-1;row++){
    let totalNoOfstar = row>n? 2*n1-row:row;
    let space= n1-totalNoOfstar
    for( let spc=1;spc<=space;spc++){
        pattern1+=" "
    }
    for(let col=1;col<=totalNoOfstar;col++){
        pattern1+="* "
    }

pattern1+="\n"
}
console.log(pattern1);
