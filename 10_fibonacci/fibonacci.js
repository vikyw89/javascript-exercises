const fibonacci = function(arg) {
    if (arg < 0) {
        return 'OOPS'
    }
    let arr = []
    for (let i = 0; i < arg; i++) {
        const imin2 = !arr[i-2] ? 0 : arr[i-2] 
        const imin1 = !arr[i-1] ? 1 : arr[i-1]
        arr.push(imin2 + imin1)
    }
    console.log(arr)
    return arr[arr.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
