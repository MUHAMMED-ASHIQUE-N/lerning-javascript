function FibonacciSequence(number) {
    let x = 0;
    let y = 1;



    for (i = 0; i <= number; i++) {
        console.log(x);

        let r = x + y;
        x = y;
        y = r;

    }
}

FibonacciSequence(15);

