const { bind } = require("lodash");

// 새의 종에 따른 비행 속도와 깃털 상태
function plumages(birds){
    return new Map(birds.map(b => [b.name, plumage(b)]));
}

function speeds(birds){
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]));
}

function plumage(bird) { // 깃털 상태
    return new createBird(bird).plumage;
}
function airSpeedVelocity(bird){ // 비행 속도
    return new createBird(bird).airSpeedVelocity;
}

function createBird(bird){
    switch (bird.type){
        case '유럽 제비' :
            return new EuropeanSwallow(bird);
        case '아프리카 제비' :
            return new AfricanSwallow(bird);
        case '노르웨이 파랑 앵무' :
            return new NorwegianBlueParrot(bird);
        default :
            return new Bird(bind);
    }
}
class EuropeanSwallow extends Bird{
    get plumage(){
        return "보통이다";
    }
}
class AfricanSwallow extends Bird{
    get plumage(){
        return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
    }
}
class NorwegianBlueParrot extends Bird{
    get plumage(){
        return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
    }
}

class Bird{
    constructor(birdObject){
        Object.assign(this, birdObject); //?
    }
    get plumage(){
        return "알 수 없다";
    }
    get airSpeedVelocity(){
        switch (bird.type){
            case '유럽 제비' :
                return 35;
            case '아프리카 제비' :
                return 40 - 2 * bird.numberOfCoconuts;
            case '노르웨이 파랑 앵무' :
                return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default :
                return null;
        }
    }
}