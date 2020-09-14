
class Shipment{
    get shippingCompany() {return this._shippingCompany;}
    set shippingCompany(arg) {this._shippingCompany = arg;}
    get trackingNumber() {return this._trackingNumber;}
    set trackingNumber(arg) {return this._trackingNumber = arg;}

    get trackingInfomation(){return this._trackingInformation;}
    set trackingInfomation(aTrackingInformation){
        this._trackingInformation = aTrackingInformation;
    }
    get shippingCompany(arg){this._shippingCompany;}
    set shippingCompany(arg){this._shippingCompany = arg;}
    get trackingInfo(){
        return '${this.shippingCompany} : ${this.trackingNumber}';
    }
}

//Client
let request = {
    vendor : "woo"
}
let aShipe = new Shipment();
aShipe.shippingCompany = request.vendor; 