var fs = require('fs');
var readOne;
var readTwo;
function aSyncExe(){
    setTimeout(function () {
        fs.writeFile('data.txt', 'Hello');
        setTimeout(function () { 
            fs.writeFile('data2.txt', 'World');
            setTimeout(function () {
                fs.readFile('data.txt', "UTF8", function (err, data) {
                    if (err) { throw err }
                    readOne = data;
                });
                setTimeout(function () {
                    fs.readFile('data2.txt', "UTF8", function (err, data) {
                        if (err) { throw err }
                        readTwo = data;
                    });
                    setTimeout(function () {
                        fs.writeFile("data3.txt", readOne + " " + readTwo);
                        console.log("aSync() over");
                    }, 1000);
                }, 1000)
            }, 1000);
        }, 1000)
    }, 1000);
}

aSyncExe();
console.log("done..");