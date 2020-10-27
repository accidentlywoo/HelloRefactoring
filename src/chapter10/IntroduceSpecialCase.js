// 전력이 필요한 현장에 인프라를 설치해 서비스를 제공
class Site{
    get customer(){
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
        }
}

class Customer{
    get isUnknown() {return false;}
    get name() {...} //고객 이름
    get billingPlan() {...} // 요금제
    set billingPlan(arg){...}
    get paymentHistory() {...} // 납부 이력
}

class UnknownCustomer {
    get isUnknown() {return true;}
    get name() {return "거주자";}
    get billingPlan() {return registry.billingPlans.basic} // 요금제
    set billingPlan(arg){/* 무시한다. */}
    get paymentHistory(){return new NullPaymentHistory();}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

// 클라이언트 1..
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName = aCustomer.name;

// 클라이언트 2..
const plan = (isUnknown(aCustomer)) ? registry.billingPlan.basic : aCustomer.billingPlan;

// 클라이언트 3..
if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

// 클라이언트 4..
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;

function isUnknown(arg) {
    if(!((arg instanceof Customer) || (arg instanceof UnknownCustomer)))
        throw new Error(`잘못된 값과 비교: <${arg}>`)
    return arg.isUnknown;
}