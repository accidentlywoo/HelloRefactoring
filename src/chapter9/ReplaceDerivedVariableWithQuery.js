const { expect, assert } = require('chai');

class ProductionPlan{
    constructor(production){
        this._initialProduction = production;
        this._productionAccumular = 0;
        this._adjustments = [];
    }
    get production() {
        // assert(this._production == this.calculatedProduction);
        return this._initialProduction + this._productionAccumular;
    }
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}