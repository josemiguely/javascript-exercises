const reverseString = function(string) {

    let rest="";
    for (let i = string.length-1;i>-1;i--){
        rest+=string[i];
    }
    return rest;
};

// Do not edit below this line
module.exports = reverseString;
