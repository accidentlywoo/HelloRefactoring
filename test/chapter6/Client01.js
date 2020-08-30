const { defaultOwner } = require("../../src/chaper6/combineFunctionsIntoClass");

const aReading = acquireReading();
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity;