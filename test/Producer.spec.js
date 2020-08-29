
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
    it('zero demand', () => { // 수요가 없다.
        asia.demand = 0;
        expect(asia.shortfall).equal(-25);
        expect(asia.profit).equal(0);
    });
    it('negative demand', () => {
        asia.demand = -1;
        expect(asia.shortfall).equal(-26);
        expect(asia.profit).equal(-10);
    });
    it('empty string demand', () => {
        asia.demand = "";
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;
    });
});

// 꽃길 Ending
describe('no producers', () => { // 생산자가 없다.
    let noProducers;
    beforeEach(() => {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    });
    it('shortfall', () => {
        expect(noProducers.shortfall).equal(30);
    });
    it('profit', () => {
        expect(noProducers.profit).equal(0);
    });
});

// describe('string for producers', () => {
//     it('', () => {
//         const data = {
//             name: "String producers",
//             producers: "",
//             demand: 30,
//             price: 20
//         };
//         const prov = new Province(data);
//         expect(prov.shortfall).equal(0);
//     });
// });