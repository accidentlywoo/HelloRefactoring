const {reading, enrichReading} = require("../combineFunctionsIntoClass");

const rawReading = reading;
const aReading = enrichReading(rawReading);
const basicChargeAmount = aReading.baseCharge;

const { describe } = require("mocha");
const { assert, expect } = require("chai");
describe('너모 어려웡!', () => {
    it('check reading unchanged', () => {
        const baseReading = {customer: "ivan", quantity: 15, month: 5, year: 2017};
        const oracle = _.cloneDeep(baseReading);
        enrichReading(baseReading);
        assert.deepEqual(baseReading, oracle);
    });
});
