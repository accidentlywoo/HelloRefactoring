const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

module.export.acquireReading = function(){
  return reading;  
};

module.export.baseRate = function (month, year){
    return 2;
}