
const { Province, sampleProvinceData } = require("../Province");

// var assert = require("assert");

const { describe } = require("mocha");

describe('province', function(){
    it('shortfall', function(){
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    });
});

const { assert, expect } = require("chai");
describe('province', () => {
    let asia;
    beforeEach(() => {
        asia = new Province(sampleProvinceData());
    });
    it('shortfall', () => {
        expect(asia.shortfall).equals(5);
    });
    it('profit', () => {
        asia = new Province(sampleProvinceData());
        expect(asia.profit).equal(230)
    });
    it('change production', () => {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    });
})