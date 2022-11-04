const leapYears = (year) => {
    if (year%100 === 0) {
        return ((year/100)%4 === 0)
    }
    return (year % 4 === 0)
};

// Do not edit below this line
module.exports = leapYears;
