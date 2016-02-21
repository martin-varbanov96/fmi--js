$(document).ready(function(){
    
    function Student(name, age){
        this.name = name;
        this.age = age;
        this.grades = new Array(0);
        this.push = push;
        this.display = display;
    }

    var Pesho = new Student("Pesho", 21);
    console.log(Pesho);
    display();
        
    
    function push(val){
        return this.grades.push(val);
    }
    
    function display(){
        $("#main").empty().append("<div id='name' class='property'>");
        $("#name").append("<h2> Name: ").append("<div class='displayer'>" + Pesho.name);
        
        $("#main").append("<div id='age' class='property'>");
        $("#age").append("<h2> Age: ").append("<div class='displayer'>" + Pesho.age);
        
        $("#main").append("<div id='grades' class='property'>");
        $("#grades").append("<h2> Grades: ").append("<div class='displayer'>" + Pesho.grades);
    }
    
    $("#input-button").click(function(){
        var temp = $("#input-grade").val();
        Pesho.push(temp);
        display();
    });
    

});