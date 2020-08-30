const { defaultOwner } = require("../../src/chaper6/combineFunctionsIntoClass");

const aReading = acquireReading();
const base = (baseRate(aReading.month, aReading.year) *aReading.quantity);

const taxableCharge = Math.max(0, base - taxThreshold(aReading.year));