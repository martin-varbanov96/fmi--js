function reverseWordsInString(arr) {
    function reverse(s) {
        if (typeof(s) != "string") {
            return null; 
        }
        return s.split("").reverse().join("");
    }
    for (var i in arr) { 
        arr[i] = reverse(arr[i]);
    }
    return arr;

}

var myArray = ["illuminati", "23", "3", "abc", true];
reverseWordsInString(myArray);
console.log(myArray);