let pattern = ""
let n = 5 
for (let row =1 ;row<=n;row++){
    for (let col = row;col<=n ;col++){
       pattern+="* "
    }
    pattern+="\n"
}
console.log(pattern);