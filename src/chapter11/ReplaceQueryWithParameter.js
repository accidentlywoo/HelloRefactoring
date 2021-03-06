// 실내온도 제어 시스템
class HeatingPlan {
    get targetTemperature(){
        return this.xxNEWtargetTemperature(thermostat.selectedTemperature);
    }
    targetTemperature(selectedTemperature){
        if(selectedTemperature > this._max) return this._max;
        else if (selectedTemperature < this._min) return this._min;
        else return selectedTemperature;
    }
}

// 호출자
if (thePlan.targetTemperature(thermostat.selectedTemperature)
 > thermostat.currentTemperature) 
 setToHeat();
else if (thePlan.targetTemperature(thermostat.selectedTemperature)
 < thermostat.currentTemperature)
  setToCool();
else 
setOff();