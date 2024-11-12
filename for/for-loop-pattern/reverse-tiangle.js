let pattern = ""
let n = 5 
for (let row =1 ;row<=n;row++){
    for (let spc=1 ;spc<row;spc++){
         pattern+=" "
    }
    for (let col = row;col<=n ;col++){
       pattern+="* "
    }
    pattern+="\n"
}
console.log(pattern);



let pattern1 = ""
let n1 = 5
for (let row = 1; row <= n1; row++) {
  for (let spc = 1; spc < row; spc++) {
    pattern1 += " "
  }
  for (let col = row; col <= n1; col++) {
    if (row == 1 || col == n || row==col) {

      pattern1 += "* "
    } else {
      pattern1 += "  "
    }
  }
  pattern1 += "\n"
}
console.log(pattern1);