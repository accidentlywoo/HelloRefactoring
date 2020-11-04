
const tempRange = aRoom.daysTempRange;
const low = tempRange.low;
const high = tempRange.high;
const isWithinRange = xxNEWwithinRange(aPlan, tempRange);
if(!isWithinRange)
    alert.push("방 온도가 지정 범위를 벗어났습니다.");