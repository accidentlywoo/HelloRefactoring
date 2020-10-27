// 전력이 필요한 현장에 인프라를 설치해 서비스를 제공
class Site{
    get customer(){return this._customer;}
}

class Customer{
    get name() {...} //고객 이름
    get billingPlan() {...} // 요금제
    set billingPlan(arg){...}
    get paymentHistory() {...} // 납부 이력
}