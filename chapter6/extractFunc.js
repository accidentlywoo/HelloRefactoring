function prinOwing(invoice) {
    let outstanding = 0;
    
    printBanner();

    // 미해결 채무(outstanding)를 계산한다.
    for(const o of invoice.orders){
        outstanding += o.amout;
    }
    recordDueDate(invoice);
    printDetail(invoice, outstanding);
}
function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
function printDetail(invoice, outstanding) {
    console.log('고객명 : ${invoice.customer}');
    console.log('채무액 : ${outstanding}'); 
    console.log('마감일 : ${invoice.dueDate.toLocaleDateString()}'); 
}
function printBanner() {
    console.log('*************************');
    console.log('****** 고갹 채무 ********');
    console.log('*************************');
}