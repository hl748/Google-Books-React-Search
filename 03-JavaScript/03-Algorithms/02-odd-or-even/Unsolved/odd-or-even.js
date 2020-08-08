// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {
    var divide = num / 2
    if (Math.floor(divide) === divide) {
        return "even"
    }
    else {
        return "odd"
    }
};
