const palindromes = function (arg) {
    const temp = arg.toLowerCase().split('')
    let ltr = []
    let rtl = []
    for (char of temp) {
        if (char != char.toUpperCase()) {
            ltr.push(char)
            rtl.unshift(char)
        }
    }
    console.log(ltr, rtl)
    const length = ltr.length
    for (let i = 0; i < length; i++) {
        if (ltr[i] !== rtl[i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
