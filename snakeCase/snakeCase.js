const snakeCase = function(arg) {
    const result = arg
        .match(/[A-Z]{1}[a-z]{2,}|[a-z]{2,}|\w+/g)
        .map(item=> item.toLowerCase())
        .join('_')
    console.log(result)
    return result
};

// Do not edit below this line
module.exports = snakeCase;
