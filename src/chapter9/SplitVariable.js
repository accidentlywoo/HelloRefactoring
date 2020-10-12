function distanceTravelled (scenario, time){
    let result;
    const primaryAcceleration = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);

    result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리

    let secondaryTime = time - scenario.delay;
    if (secendaryTime > 0){ // 두 번째 힘을 반영해 다시 계산
        let primaryVelocity = primaryAcceleration * scenario.delay;
        let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;// 변수 두번 대입 -> 역할 두개
        result += primaryVelocity * secondaryTime + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return result;
}