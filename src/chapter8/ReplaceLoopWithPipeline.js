function acquireData(input){
    const lines = input.split("\n");
    let firstLine = true;
    const result = [];
    
    // 반복문에서 사용하는 컬렉션을 가리키는 별도 변수를 새로 만든다.
    const loopItems = lines;
    for(const line of loopItems){
        if(firstLine){
            firstLine = false;
            continue;
        }
        if(line.trim() === "") continue;
        const record = line.split(",");
        if(record[1].trim() === "India"){
            result.push({city: record[0].trim(), phone: record[2].trim()})
        }
    }
    return result;
}