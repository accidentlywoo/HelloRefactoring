// 전력이 필요한 현장에 인프라를 설치해 서비스를 제공
function createUnknownCustomer(){
    return {
        isUnknown : true,
    };
}

function isUnknown(arg) {
    return (arg === "미확인 고객");
}

class Site{
    get customer(){
        return (this._customer === "미확인 고객") ? new UnknownCustomer() : this._customer;
        }
}

class Customer{
    get name() {...} //고객 이름
    get billingPlan() {...} // 요금제
    set billingPlan(arg){...}
    get paymentHistory() {...} // 납부 이력
    get isUnknown() {return false;}
}

class NullPaymentHistory {
    get weeksDelinquentInLastYear() {return 0;}
}

// 클라이언트 1..
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if(isUnknown(aCustomer)) customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트 2..
const plan = isUnknown(aCustomer) ?
 registry.billingPlan.basic : aCustomer.billingPlan;

// 클라이언트 3..
const weeksDelinquent = isUnknown(aCustomer) ?
0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;

