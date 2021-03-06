const { expect, assert } = require('chai');

class Person {
    constructor(){
        this._telephoneNumber = new TelephoneNumber();
    }

    get officeAreaCode(){return this._telephoneNumber.areaCode;}
    set officeAreaCode(arg){
        this._telephoneNumber = new TelephoneNumber(arg, this.officeAreaCode);
    }
    get officeNumber() {return this._telephoneNumber.number;}
    set officeNumber(arg){
        this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg);
    }
}

class TelephoneNumber {
    constructor(areaCode, number){
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode(){return this._areaCode;}
    set areaCode(arg){this._areaCode = arg;}
    get number(){return this._number;}
    set number(arg){this._number = arg;}
    // 동치성을 값 기반으로 평가하기 위한 발버둥
    equals(other) {
        if(!(other instanceof TelephoneNumber)) return false;
        return this.areaCode == other.areaCode && this.number == other.number;
    }

}

it('telephone equals', () => {
    assert( new TelephoneNumber("312", "555-0142")
    .equals(new TelephoneNumber("312", "555-0142")));
});