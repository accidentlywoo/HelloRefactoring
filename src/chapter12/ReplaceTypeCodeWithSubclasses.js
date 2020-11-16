class Employee {
    constructor(name, type){
        this.validateType(type);
        this._name = name;
        this._type = type;
    }
    validateType(arg){
        if(!["engineer", "manager", "salesperson"].includes(arg))
            throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
    get type(){return this._type;}
    toString() {return `${this._name}(${this._type})`;}
}

function createEmployee(name, type){
    switch(type){
        case "engineer" : return new Employee(name, type);
    }
    return new Employee(name, type);
}

class Enginner extends Employee{
    get type() {return "engieer";}
}