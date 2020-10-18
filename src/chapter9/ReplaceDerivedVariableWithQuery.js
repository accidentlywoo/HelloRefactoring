const { expect, assert } = require('chai');

class ProductionPlan{
    constructor(production){
        this._initialProduction = production;
        this._productionAccumular = 0;
        this._adjustments = [];
    }
    get production() {
        assert(this._productionAccumular == this.calculatedProductionAccumulator);
        return this._initialProduction + this._productionAccumular;
    }
    get calculatedProductionAccumulator(){
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
    applyAdjustment(anAdjustment){
        this._adjustments.push(anAdjustment);
        this._production += anAdjustment.amount;
    }
}