const removeFromArray = (arr,...args) => {
    let output = arr
    for(let i in args) {
        output = output.filter(el => {
            return el !== args[i]
        })
    }
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
