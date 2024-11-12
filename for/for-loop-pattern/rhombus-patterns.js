
let pattern = ""
let n = 3
for (let row = 1; row <= n; row++) {

    for(spc=1;spc<row;spc++){
        pattern+=" "
    }

    for (let col = 1; col <= n; col++) {

        pattern += "* "

    }

    pattern += "\n"
}
console.log(pattern);






let pattern1 = ""
let n1 = 5
for (let row = 1; row <= n; row++) {

    for(spc=n;spc>row;spc--){
        pattern1+=" "
    }

    for (let col = 1; col <= n; col++) {

        pattern1 += "* "

    }

    pattern1 += "\n"
}
console.log(pattern1);

