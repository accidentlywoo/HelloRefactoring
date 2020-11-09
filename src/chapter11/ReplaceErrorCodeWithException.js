function localShippingRules(country){
    const data = countryData.shippingRules[country];
    if (data) return new shippingRules(data);
    else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder){
    // 관련 없는 코드
    const shippingRules = localShippingRules(anOrder.country);
    // if (shippingRules < 0) throw new Error("오류 코드가 다 사라지지 않았습니다.");
    // 더 관련 없는 코드
}

let status;
try{
    status = calculateShippingCosts(orderData);
}catch(e){
    if(e instanceof OrderProcessingError)
        errorList.push({order: orderData, errorCode: status});
    else
        throw e;
}
if (status < 0) errorList.push({order: orderData, errorCode: status});

class OrderProcessingError extends Error {
    constructor(errorCode){
        super('주문 처리 오류 ${errorCode}');
        this.code = errorCode;
    }
    get name() {return "OrderProcessingError";}
}



