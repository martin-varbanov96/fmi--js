var n = 5;
var k = 3;

function rabbitSeq(num, kum) {
    var birthable = 0;
    var newBorn = 0;
    var maturing = 0;
    var step = 0;
    var deathrattle = 0;

    for (var i = 1; i <= num; i++) {
        deathrattle++;
        if (deathrattle == kum) {
            birthable--;
            deathrattle = 0;
        }
        if (step == 0) { 
            birthable = 0;
            newBorn = 1;
            maturing = 0;
            step++;
        } 
        else {             
            birthable += maturing;
            maturing = newBorn;
            newBorn = birthable * 1;
        }
    }
    console.log(birthable + maturing + newBorn);
}

rabbitSeq(6, 3);
