class EmployeeType{
    constructor(aString){
        this._value = aString;
    }
    toString(){return this._value;}
    get capitalizedType(){
        return this.toString.charAt(0).toUpperCase() 
        + this.toString.substr(1).toLowerCase();
    }
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
    
    toString() {return `${this._name}(${this.type.capitalizedType})`;}
}
class EmployeeType{

}

class Enginner extends EmployeeType{
    toString() {return "engieer";}
}

class Salesperson extends EmployeeType{
    toString() {return "salesperson";}
}

class Manager extends EmployeeType{
    toString() {return "manager";}
}
