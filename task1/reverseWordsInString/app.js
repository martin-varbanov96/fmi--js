function reverseWordsOrderInString(arr) { 
    var outputArr = [];
    for (i in arr) {         
        outputArr[arr.length - i - 1] = arr[i];
    }
    return outputArr;
}

var inputArr = ['foo', 'bar', 'test', 'illuminati', {}, [], 231];
var output = reverseWordsInString(inputArr);
console.log(output);