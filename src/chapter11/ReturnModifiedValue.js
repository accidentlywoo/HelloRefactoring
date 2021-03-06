// GPS 위치 목록으로 다양한 계산을 수행하는 코드
function calculateAscent(){ // 고도 상승분
    let result = 0;
    for (let i = 1; i < points.length; i++){
        const verticalChage = points[i].elevation - points[i-1].elevation;
        result += (verticalChage > 0) ? verticalChage : 0;
    }
    return result;
}

// let totalAscent = 0;
// let totalTime = 0;
// let totalDistance = 0;
const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();
const pace = totalTime / 60 / totalDistance;