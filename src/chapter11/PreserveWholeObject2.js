class Heating{
    xxNEWwithinRange(tempRange){
        const low = tempRange.low;
        const high = tempRange.high;
        const isWithinRange = this.withinRange(low, high);
        return isWithinRange;
    }
}

const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(aPlan, tempRange);
if(!isWithinRange)
    alert.push("방 온도가 지정 범위를 벗어났습니다.");