function phiEstimation(num) { 
    if (num == 1) {
        return 0;
    }
    var b = 1;
    var start = 0;
    for (var i = 1; i <= num; i++) {
        start += b;
        b = start - b;
    }
    return start/b;   
}

//Enter number
console.log(phiEstimation(27));