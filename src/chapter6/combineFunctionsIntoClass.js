const { _, cloneDeep} = require('lodash');
 
 reading = {customer: "ivan", quantity: 10, month: 5, year: 2017};

function enrichReading(original) {
    const result =_.cloneDeep(original);
    result.baseCharge = calculateBaseCharge(result);
    return result;
}

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

function baseRate(a, b) {
    return 1;
}

module.exports = {reading, enrichReading};
