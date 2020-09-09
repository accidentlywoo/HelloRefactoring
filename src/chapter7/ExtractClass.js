class Person {
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }
    get name() {return this._name;}
    set name(arg) {return this._name = arg;}
    get telephoneNumber() {return this._telephoneNumber.toString();}

    get officeAreaCode() {return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg) {return this._telephoneNumber.areaCode = arg;}
    
    get officeNumber() {return this._telephoneNumber.number;}
    set officeNumber(arg) {return this._telephoneNumber.number = arg;}
}

class TelephoneNumber{
    get areaCode() {return this._areaCode;}
    set areaCode(arg) {return this._areaCode = arg;}

    get number() {return this._number;}
    set number(arg) {return this._number = arg;}
    get telephoneNumber(){return `(${this.officeAreaCode}) ${this.officeNumber}`;}

    toString() {return `(${this.areaCode}) ${this.number}`;}
}

let person = new Person();
person.name = "test";
person.officeAreaCode = '02'
person.officeNumber = '2222-2222';
console.log(person.name);
console.log(person.telephoneNumber);