const findTheOldest = function(arg) {
    const result = arg.reduce((result, item) => {
        const age = item.yearOfDeath - item.yearOfBirth
        const resultAge = (result.yearOfDeath ?? new Date().getFullYear()) - result.yearOfBirth
        console.log(item, result)
        return resultAge > age ? result : item
    }, {})
    console.log(result)
    return result
};

// Do not edit below this line
module.exports = findTheOldest;
