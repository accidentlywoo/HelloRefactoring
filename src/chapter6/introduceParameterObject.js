const station = {
    name : "ZB1",
    readings: [
        {temp: 47, time:"2016-11-10 09:10"},
        {temp: 53, time:"2016-11-10 09:20"},
        {temp: 58, time:"2016-11-10 09:30"},
        {temp: 53, time:"2016-11-10 09:40"},
        {temp: 51, time:"2016-11-10 09:50"}
    ]
}
function readingsOutsideRange(station, min, max) {
    return station.readings
    .filter(r => r.temp < min || r.temp > max);
}

alert = readingsOutsideRange(station, 
    operatingPlan.temperatureFloor, // 최저온도
    operatingPlan.temperatureCeiling); // 최고온도