function localShippingRules(country){
    const data = countryData.shippingRules[country];
    if (data) return new shippingRules(data);
    else return -23;
}

function calculateShippingCosts(anOrder){
    // 관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    if (shippingRules < 0) return shippingRules; // 오류 전파
    // 더 관련 없는 코드
}
try{
    const status = calculateShippingCosts(orderData);
}catch(e) {
    // 예외 처리 로직
}
if (status < 0) errorList.push({order: orderData, errorCode: status});