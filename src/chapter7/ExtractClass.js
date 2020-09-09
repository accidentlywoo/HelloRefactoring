class Person {
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }
    get name() {return this._name;}
    set name(arg) {return this._name = arg;}
    get telephoneNumber() {return this._telephoneNumber.telephoneNumber;}

    get officeAreaCode() {return this._telephoneNumber.officeAreaCode;}
    set officeAreaCode(arg) {return this._telephoneNumber.officeAreaCode = arg;}
    
    get officeNumber() {return this._officeNumber;}
    set officeNumber(arg) {return this._officeNumber = arg;}
}

class TelephoneNumber{
    get officeAreaCode() {return this._officeAreaCode;}
    set officeAreaCode(arg) {return this._officeAreaCode = arg;}

    get telephoneNumber(){return '(${this.officeAreaCode}) ${this.officeNumber}';}
}