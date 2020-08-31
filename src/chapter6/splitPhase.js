// 상품의 결제 금액을 계산하는 코드
function priceOrder(product, quantity, shippingMethod) {
    // const priceData = {basePrice: basePrice, quantity: quantity, discount: discount};
    const priceData = calculatePricingData(product, quantity);
   return applyShipping(priceData, shippingMethod);
}
function calculatePricingData(product, quantity) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    return {basePrice: basePrice, quantity: quantity, discount: discount};
}
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    return priceData.basePrice - product.discount + shippingMethod;
}