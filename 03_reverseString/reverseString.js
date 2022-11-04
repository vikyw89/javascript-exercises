const reverseString = (words) => {
    let output = ''
    for(let i = words.length-1; i >= 0; i--) {
        output += words[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
