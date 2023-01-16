var getString = function (s) {
    return "hej ".concat(s);
};
var arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    console.log(getString(word));
}
