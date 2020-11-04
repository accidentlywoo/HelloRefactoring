const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if(!aPlan.withingRange(low, high))
    alert.push("방 온도가 지정 범위를 벗어났습니다.");