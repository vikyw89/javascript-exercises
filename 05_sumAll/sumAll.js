const sumAll = (start, end) => {
    let output = 0
    if (start > end) {
        a = end;
        b = start;
    } else {
        a = start;
        b = end;
    }
    if ((start < 0) || (end < 0)) {
        return 'ERROR'
    }
    if ((typeof start !== 'number') || (typeof end !== 'number')) {
        return 'ERROR'
    }
    for (let i = a; i <= b; i++) {
        output += i
    }
    return output
};

// Do not edit below this line
module.exports = sumAll;
