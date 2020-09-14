class Tracking {
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {return this._trackingNumber = arg;}
    get display(){
        return '${this.shippingCompany} : ${this.trackingNumber}'
    }
}

class Shipment{
    get trackingInfo(){
        return this._trackingInformation.display;
    }
    get trackingInfomation(){return this._trackingInformation;}
    set trackingInfomation(aTrackingInformation){
        this._trackingInformation = aTrackingInformation;
    }
}