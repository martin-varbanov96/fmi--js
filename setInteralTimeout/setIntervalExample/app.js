var count = 0;
var startTimer = 0;
var stopTimer = 0;


callInterval();

function callInterval() {
    startTimer = new Date().getTime();
    setInterval(function () {
        stopTimer = new Date().getTime();
        console.log("start time is: " + startTimer + " and stop timer is: " + stopTimer + "devision is = " + (stopTimer - startTimer));
        console.log(fib(count) + "{" + count + "}");
        startTimer = new Date().getTime();
        count++;

    }, 500);
}

function fib(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
