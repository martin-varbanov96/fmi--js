console.log("Bomb explodes in:");
console.log("3");
setTimeout(function () {
    console.log("2");    
    setTimeout(function () {
        console.log("1");
        var timer = setTimeout(function () { 
            console.log("boom");
        }, 1000);
    }, 1000);
}, 1000);