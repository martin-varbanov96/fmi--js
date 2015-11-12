function* simpleGenerator() {
    var current = 0;
    while (current <=5) {         
        yield current++;
    }
}

var a = simpleGenerator();
console.log(a.next());