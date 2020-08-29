function prinOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();

    printDetail(outstanding);

    function printDetail(outstanding) {
        console.log('고객명 : ${invoice.customer}');
        console.log('채무액 : ${outstanding}');    
    }
}