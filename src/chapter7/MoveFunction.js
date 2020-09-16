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
    function calculateDistance(){ // 총 거리 계산
        let result = 0;
        for( let i = 1; i < points.length; i++){
            result += distance(points[i-1], points[i]);
        }
        return result;
    }

   
    function calculateTime(){}
}
function top_calculateDistance(points){
    let result = 0;
    for(let i = 1; i < points.length; i++){
        result += distance(points[i-1], points[i]);
    }
    return result;
    function distance(p1, p2){
        const EARTH_RADIUS = 3959;
        const dLat = radians(p2.lat) - radians(p1.lat);
        const dLon = radians(p2.lon) - radians(p1.lon);
        const a = Math.pow(Math.sin(dLat / 2), 2)
                + Math.cos(radians(p2.lat))
                * Math.cos(radians(p1.lat))
                * Math.pow(Math.sin(dLon / 2), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return EARTH_RADIUS * c;
    }
    function radians(degrees){}
}
