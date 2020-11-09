function charge(customer, usage, provider){
    const baseCharge = customer.baseCharge * usage;
    return baseCharge + provider.connectionCharge;
}

// 호출
monthCharge = charge(customer, usage, provider).charge;