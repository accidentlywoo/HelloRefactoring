class EmployeeType{
    constructor(aString){
        this._value = aString;
    }
    toString(){return this._value;}
}

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
    get typeString(){return this._type.toString();}
    get type(){return this._type;}
    set type(arg){this._type = Employee.createEmployeeType(arg);}
    static createEmployeeType(aString){
        switch(aString){
            case "engineer" : return new Enginner();
            case "salesperson" : return new Salesperson();
            case "manager" : return new Manager();
            default : throw new Error(`${aString}라는 직원 유형은 없습니다.`);
        }
    }

    get capitalizedType(){
        return this.typeString.charAt(0).toUpperCase() 
        + this.typeString.substr(1).toLowerCase();
    }
    toString() {return `${this._name}(${this.capitalizedType})`;}
}
class EmployeeType{

}

class Enginner extends EmployeeType{
    get type() {return "engieer";}
}

class Salesperson extends EmployeeType{
    get type() {return "salesperson";}
}

class Manager extends EmployeeType{
    get type() {return "manager";}
}
