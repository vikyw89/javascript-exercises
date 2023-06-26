/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracketsMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const startingBrackets = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in bracketsMap) {
            startingBrackets.push(s[i]);
        } else if(bracketsMap[startingBrackets.pop()] != s[i]) {
            return false;
        }
    }
    return startingBrackets.length === 0;
};

console.log(isValid("()") === true)
console.log(isValid("()[]{}") === true)
console.log(isValid("(){}}{") === false)
