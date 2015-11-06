var fs = require('fs');

function sync() {
    return new Promise(function (fulfill, reject) {        
        fs.readFile("data.txt", "UTF8", function (err, res) {
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

function main() {
    set
    sync().then(function (result) {
        console.log(result);
    });
}

main();
console.log("end..");