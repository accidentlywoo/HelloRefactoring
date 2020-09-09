class Order{
    constructor(data = {priority: "normal"}){
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
let order1 = new Order();
order1.priority = "normal";

// let orders = [new Order().priority ="normal",new Order().priority = "high"];
let orders = [order1];
let orders2 = [new Order({priority: "normal"}),new Order({priority: "high"}), new Order({priority: "low"})];
console.log("setter Composition : ", orders.forEach(o => o));// -> 왜 안 higherThan이 undefined일까?
console.log("default Constructor Composition : " ,new Order());
console.log("constructor Composition : ", orders2.filter(o => o.priority.higherThan(new Priority("low"))));