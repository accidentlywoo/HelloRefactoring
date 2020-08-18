
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
    it('shortfall', () => {
        const asia = new Province(sampleProvinceData());
        expect(asia.shortfall).equals(5);
    })
})