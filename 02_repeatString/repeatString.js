const repeatString = (word, times) => {
    if (Number(times)<0) {
        return 'ERROR'
    }
    let output = ""
    for (let i = 0; i < Number(times); i++) {
        output += word
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
