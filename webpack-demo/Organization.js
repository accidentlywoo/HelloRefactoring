export class Organization{
    constructor(data){
        // this._data = data;
        this._name = data.name;
        this._country = data.country;
    }
    set name(aString){this.name = aString;}
    get name(){return this.name;}
    get country(){return this._country}
    set country(aCountryCode){this._country = aCountryCode;y}
}