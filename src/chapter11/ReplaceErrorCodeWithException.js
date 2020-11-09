function localShippingRules(country){
    const data = countryData.shippingRules[country];
    if (data) return new shippingRules(data);
    else return -23;
}