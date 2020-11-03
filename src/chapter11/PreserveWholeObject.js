// 실내온도 모니터링 시스템
class HeatingPlan{
    xxNEWwithinRange(aNumberRange){
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
    withinRange(bottom, top){
        return (bottom >= this._temperatureRange.low) && top <= (this._temperatureRange.high);
    }
}

const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(!aPlan.withinRange(low, high))
    alert.push("방 온도가 지정 범위를 벗어났습니다.");