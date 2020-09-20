const { assert } = require("chai");

class Account {
    constructor(number, type){
        this._number = number;
        this._type = type;
        //assert(interestRate === this._type.interestRate);// 로깅이나 해라
    }

    get interestRate(){return this._type.interestRate;}
}

class AccountType {
    constructor(nameString, interestRate){
        this._name = nameString;
        this._interestRate = interestRate;
    }
    
    get interestRate(){return this._type.interestRate;}
}