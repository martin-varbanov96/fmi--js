function* powerGen() {
    var result  = Math.pow(yield 'a', yield 'b');
    return result;
}
