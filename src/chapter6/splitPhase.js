// 상품의 결제 금액을 계산하는 코드
function priceOrder(product, quantity, shippingMethod) {
    const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
        * product.basePrice * product.discountRate;
    const priceData = {basePrice: basePrice, quantity: quantity, discount: discount};
    const price = applyShipping(priceData, shippingMethod);
    return price;
}
function applyShipping(priceData, shippingMethod) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
        ? shippingMethod.discountedFee : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingCost;
    const price = priceData.basePrice - product.discount + shippingMethod;
    return price;
}