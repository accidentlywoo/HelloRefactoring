class Order {
    constructor(data) {
        this._number = data.number;
        this._customer = new CustomElementRegistry(data.customer);
    }
}

class Customer{
    constructor(id){
        this._id = id;
    }

    get id() {return this._id;}
}