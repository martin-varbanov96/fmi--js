var foo = new Object();
foo.bar = "Hello!";

var temp = new foo();

$("body").append("<h1>" + foo.bar);