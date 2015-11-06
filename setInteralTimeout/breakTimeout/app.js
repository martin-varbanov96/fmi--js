console.log("start");
var timer = setTimeout(function () {     
    console.log("This shouldn't get printed");
}, 1000);
//clearTimeout() should be set after the setTimeout() function
clearTimeout(timer);
console.log("end");