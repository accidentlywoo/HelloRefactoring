function bookConcert(aCustomer, isPremium){
    if(isPremium){
        // 프리미엄 예약용 로직
    }else{
        // 일반 예약용 로직
    }
}

bookConcert(aCustomer, true);

bookConcert(aCustomer, CustomerType.PREMIUM);

bookConcert(aCustomer, "premium");

function deliveryDate(anOrder, isRush){
    if(isRush) return rushDeliveryDate(anOrder);
    else return regularDeliveryDate(anOrder);
}
    // if(isRush){
    //     let deliveryTime;
    //     if(["MA", "CT"] .includes(anOrder.deliveryState)) deliveryTime = 1;
    //     else if(["NY", "NH"] .includes(anOrder.deliveryState)) deliveryTime = 2;
    //     else deliveryTime = 3;
    //     return anOrder.placedOn.plusDays(1 + deliveryTime);
    // }
    // else{
    //     let deliveryTime;
    //     if(["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    //     else if(["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    //     else deliveryTime = 4;
    //     return anOrder.placedOn.plusDays(2 + deliveryTime);
    // }
function rushDeliveryDate(anOrder){
    let deliveryTime;
    if(["MA", "CT"].includes(anOrder.deliveryState)) deliveryTime = 1;
    else if(["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder){
    let deliveryTime;
    if(["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
    else if(["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
    else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

aShipment.deliveryDate = deliveryDate(anOrder, true);

aShipment.deliveryDate = deliveryDate(anOrder, true);