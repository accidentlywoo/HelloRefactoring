
function xxNEWwithinRange(aPlan, tempRange){
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
}

const tempRange = aRoom.daysTempRange;
const isWithinRange = xxNEWwithinRange(aPlan, tempRange);
if(!isWithinRange)
    alert.push("방 온도가 지정 범위를 벗어났습니다.");