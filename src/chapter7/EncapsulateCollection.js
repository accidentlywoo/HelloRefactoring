class Person{
    constructor(name){
        this._name = name;
        this._courses = [];
    }
    addCourse(aCourse){
        this._courses.push(aCourse);
    }
    removeCourse(aCourse, fnIfAbsent = () => {throw new RangeError();}){
        const index = this._courses.indexOf(aCourse);
        if(index === -1) fnIfAbsent();// 와씨 뭐야이거
        else this._courses.splice(index, 1);
    }

    get name(){return this._name;}
    get courses(){return this._courses.slice();}
}
class Course{
    constructor(name, isAdvanced){
        this._name = name;
        this._isAdvanced = isAdvanced;
    }
    get name(){return this._name;}
    get isAdvanced(){return this._isAdvanced;}
}

// 클라이언트
for(const name of readBasicCourseNames(filename)){
    aPerson.addCourse(new Course(name, false));
}