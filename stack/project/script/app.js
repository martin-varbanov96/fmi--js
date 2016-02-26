$(document).ready(function(){

    var arr =[[3, 4, 5, 6], [1, 3, 5, 6]];
    var arrStack = new Array();
    arrStack.push(arr);
    console.log(arrStack);
    
    $("#button").click(function(){
        arrStack.push(arr);
        console.log(arrStack);        
    });
    
    $("#pop").click(function(){
        arrStack.pop();
        console.log(arrStack);
    });
});