let customerData = require('./CustomerData.json');
let lodash =  require('lodash');

// 쓰기 예
console.log(customerData[1920]);//오예 된다!
console.log('오예! : ',customerData[1920].usages[2015][1]);

//읽기 예
function compareUsage (customerID, laterYear, month){
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change: later - earlier};
}
// Step 1. 변수 캡슐화
function getRawDataOfCustomers() {return customerData;}
function setRawDataOfCustomers(arg){customerData = arg;}
// 쓰기 예
getRawDataOfCustomers()[customerID].usages[year][month] = amount;
// 읽기 예
function compareUsage(customerID, laterYear, month){
    const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
    const earlier = getRawDataOfCustomers()[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change: later - earlier};
}

class CustomerData{
    constructor(data){
        this._data = data;
    }
    get rawData(){return _.cloneDeep(this._data)}
    setUsage(customerID, year, month, amount){
        this._data[customerID].usages[year][month] = amount;
    }
}
function getCustomerData(){return customerData;}
function getRawDataOfCustomers(){return customerData.rawData;}
function setRawDataOfCustomers(arg){customerData = new CustomerData(arg);}

// 쓰기 예
getCustomerData().setUsage(customerID, year, month,amount);