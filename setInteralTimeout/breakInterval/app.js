var count = 0;
var interval = setInterval(function () {
    console.log(count);
    count++;
    if (count >= 3) {
        clearInterval(interval);
    }
}, 500);