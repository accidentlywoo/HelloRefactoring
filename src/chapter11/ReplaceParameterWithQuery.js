class Order{
    get finalPrice(){
        const basePrice = this.quantity * this.itemPrice;
        let discountLevel;
        if(this.quantity > 100) discountLevel = 2;
        else discountLevel = 1;
        return this.discountedPrice(basePrice, discountLevel);
    }
}