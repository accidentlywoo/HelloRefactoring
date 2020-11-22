const { isMap } = require("lodash");

class Person {
    constructor(name, genderCode){
        this._name = name;
        this._genderCode = genderCode || 'X';
    }
    get name()      {return this._name;}
    get genderCode(){return this._genderCode;}
    get isMale(){return this instanceof Male;}
    // 생략
}

class Male extends Person {
    get genderCode() {return "M";}
}

class Female extends Person{
    get genderCode(){return "F";}
}

function createPerson(name){
    switch (aRecord.gender){
        case 'M' : return new Male(aRecord.name); break;
        case 'F' : return Female(aRecord.name); break;
        default : return Person(aRecord.name);
    }
}
function loadFromInput(data){
    const result = [];
    data.map(aRecord => createPerson(aRecord));
}

// client
const numberOfMales = people.filter(p => p.isMale).length;
