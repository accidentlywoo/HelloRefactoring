// GPS 추적 기록의 총 거리 계산함수
function trackSummary(points){
    const totalTime = calculateTime();
    const totlaDistance = calculateDistance();
    const pace = totalTime / 60 / totlaDistance;
    return {
        time : totalTime,
        distance : totlaDistance,
        pace : pace
    };
}

function calculateDistance(){ // 총 거리 계산
    let result = 0;
    for( let i = 1; i < points.length; i++){
        result += distance(points[i-1], points[i]);
    }
    return result;
}