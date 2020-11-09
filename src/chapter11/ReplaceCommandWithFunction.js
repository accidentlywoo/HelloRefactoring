class ChargeCalculator{
    constructor(){
    }
    charge(customer, usage, provider){
        const baseCharge = customer.baseCharge * usage;
        return baseCharge + provider.connectionCharge;
    }
}

function charge(customer, usage, provider){
    return new ChargeCalculator(customer, usage, provider).charge(customer, usage, provider);
}

// 호출
monthCharge = charge(customer, usage, provider).charge;