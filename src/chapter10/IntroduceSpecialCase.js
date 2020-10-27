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

// 클라이언트 1..
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트 2..
const plan = (aCustomer === "미확인 고객") ? registry.billingPlan.basic : aCustomer.billingPlan;

// 클라이언트 3..
if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;

// 클라이언트 4..
const weeksDelinquent = (aCustomer === "미확인 고객") ? 0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;
