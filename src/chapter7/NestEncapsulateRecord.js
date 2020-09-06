let customerData = require('./CustomerData.json');

// 쓰기 예
console.log(customerData[1920]);//오예 된다!
console.log('오예! : ',customerData[1920].usages[2015][1]);

//읽기 예
function compareUsage (customerID, laterYear, month){
    const later = customerData[customerID].usages[laterYear][month];
    const earlier = customerData[customerID].usages[laterYear-1][month];
    return {laterAmount: later, change: later - earlier};
}
