JSON jsonBoj =
{
    name: "애크미 보스턴",
    location : "Malden MA",
    // 더 많은 현장 정보
    customer: {
        name: "애크미 산업",
        billingPlan: "plan-451",
        paymentHistory: {
            weeksDelinquentInLastYear: 7
            // 중략
        },
        // 중략
    }
};

JSON jsonBoj2 =
{
    name: "애크미 보스턴",
    location : "Malden MA",
    // 더 많은 현장 정보
    customer: "미확인 고객",
};

function enrichSite(inputSite){
    return _.cloneDeep(inputSite);
}

function isUnknown(aCustomer) {
    return aCustomer === "미확인 고객";
}

// 클라이언트 1 
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 수 많은 코드 ...
let customer;
if (isUnknown(aCustomer)) customerName = "거주자" ;
else customerName = aCustomer.name;



// 클라이언트 2
const plan = isUnknown(aCustomer) ? 
    registry.billingPlan.basic : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer) ? 
    0 : aCustomer.paymentHistory.weeksDelinquentInLastYear;