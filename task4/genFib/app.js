function* fibonacci() {
    var a = 0, b = 1, c = 0;

    while (true) {
        yield a;
        c = a, a = b, b = c + a;
    }
}

var seq = fibonacci();

consoe.log(seq.next().value);