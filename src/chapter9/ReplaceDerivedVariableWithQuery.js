const { expect, assert } = require('chai');

class ProductionPlan{
    constructor(production){
        this._production = production;
        this._adjustments = [];
    }
    get production() {
        // assert(this._production == this.calculatedProduction);
        return this._production;
    }
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}