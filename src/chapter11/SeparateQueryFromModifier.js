function alertForMiscreant(people){
    if(findMiscreant(people) !== "") setOffAlarms();
    for (const p of people){
        if(p === "조커"){
            setOffAlarms();
            return;
        }
        if(p === "사루만"){
            setOffAlarms();
            return;
        }
    }
    return;
}
function findMiscreant(people){
    for (const p of people){
        if(p === "조커"){
            // setOffAlarms();
            return "조커";
        }
        if(p === "사루만"){
            // setOffAlarms();
            return "사루만";
        }
    }
    return "";
}

const found = findMiscreant(people);
alertForMiscreant(people);