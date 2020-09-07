class Order{
    constructor(data){
        this.priority = data.priority;
    }
    get priority(){return this._priority;}
    get priorityString(){return this._priority.toString();}
    set priority(aString){this._priority = new Priority(aString);}
}

class Priority{
    constructor(value){
        if(value instanceof Priority) return value;
        if(Priority.legalValues().includes(value)) this._value = value;
        else console.error(`<${value}> is invalid for Priority`);
    }
    toString() {return this._value;}
    get _index() {return Priority.legalValues().findIndex(s => s === this._value);}
    static legalValues() {return ['low', 'normal', 'high', 'rush'];}

    equals(other) {return this._index === other._index;}
    higherThan(other) {return this._index > other._index;}
    lowerThan(other) {return this._index < other._index;}
}

// 클라이언트
let orders = [new Order(new Priority('low')),new Order(new Priority('normal'))];
let highPriorityCount = orders.filter(o => o.priority.higherThan(new Priority("low")));
console.log(highPriorityCount);