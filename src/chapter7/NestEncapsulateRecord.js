let customerData = require('./CustomerData.json');
let lodash =  require('lodash');

class CustomerData{
    constructor(data){
        this._data = data;
    }
    get rawData(){return _.cloneDeep(this._data)}
    setUsage(customerID, year, month, amount){
        this._data[customerID].usages[year][month] = amount;
    }
    usages(customerID, year, month){
        return this._data[customerID].usages[year][month];
    }
}
function getCustomerData(){return customerData;}
function getRawDataOfCustomers(){return customerData.rawData;}
function setRawDataOfCustomers(arg){customerData = new CustomerData(arg);}

// 쓰기 예
getCustomerData().setUsage(customerID, year, month,amount);

function compareUsage (customerID, laterYear, month){
    const later = getCustomerData().usages(customerID, laterYear, month);
    const earlier = getCustomerData().usages(customerID, laterYear-1, month);
    return {laterAmount: later, change: later - earlier};
}