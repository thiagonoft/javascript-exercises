const reverseString = function(word) {
    let newWord = "";
    let oldWord = word;
    let length = oldWord.length;

    for (let i = 0; i < length; i++){
        newWord += oldWord.slice(-1);
        oldWord = oldWord.slice(0, -1);
    }
    
    return newWord;
};


// Do not edit below this line
module.exports = reverseString;
