class ChargeCalculator{
    constructor(customer, usage, provider){
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }
    get charge(customer, usage, provider){
        const baseCharge = this._customer.baseCharge * this._usage;
        return baseCharge + this._provider.connectionCharge;
    }
}

function charge(customer, usage, provider){
    return new ChargeCalculator(customer, usage, provider).charge(customer, usage, provider);
}

// 호출
monthCharge = charge(customer, usage, provider).charge;