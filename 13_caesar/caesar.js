const caesar = function(message, key) {
    let temp = message.split('')
    let result = ''
    if (key < 0) {
        key = 26 + (key % 26)
    }
    for (let i = 0; i < temp.length ; i++) {
        if (temp[i].toLowerCase() === temp[i].toUpperCase()) {
            result += temp[i]
        } else if (temp[i] === temp[i].toLowerCase()) {
            result += String.fromCharCode((((temp[i].charCodeAt(0) - 97) + key ) % 26) + 97)
        } else if (temp[i] === temp[i].toUpperCase()) {
            result += String.fromCharCode((((temp[i].charCodeAt(0) - 65) + key ) % 26) + 65)
        }
    }
    console.log(message, result)
    return result
};

// Do not edit below this line
module.exports = caesar;
