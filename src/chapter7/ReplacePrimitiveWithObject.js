class Order{
    constructor(data = {}){
        this._priority = new Priority(data.priority);
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

let orders = [new Order().priority ="normal",new Order().priority = "high"];
let orders2 = [new Order({priority: "normal"}),new Order({priority: "high"})];
// console.log( orders.filter(o => o.priority.higherThan(new Priority("low")))); -> 왜 안 higherThan이 undefined일까?
console.log( orders2.filter(o => o.priority.higherThan(new Priority("low"))));