/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // convert to lowercase
    const input = s.toLowerCase()

    // remove anything but alphanumeric
    const pureString = input.replace(new RegExp(
        String.raw`[^a-z0-9]+`, "g"), "")

    // compare left to right
    let r = pureString.length - 1
    for (let l = 0; l < r; l++, r--) {
        if (pureString[l] !== pureString[r]) return false
    }

    return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama") === true)