function getTime() {
    var startTime = new Date().getTime();
    console.log(startTime);
    
    setTimeout(function () {
        var endTime = new Date().getTime();
        endTime -= startTime;
        console.log("Execution time is: " + endTime);
    }, 3000);
}

getTime();