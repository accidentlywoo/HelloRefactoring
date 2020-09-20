function renderPerson(outStream, person){
    const result = [];
    result.push('<p>${person.name}</p>');
    result.push(renderPhoto(person.photo));
    result.push(zznew(person.photo));
    return result.join("\n");
}

function renderPhoto(photo){
    //뭐야 이거 왜없어
}

function photoDiv(p){
    return [
        "div",
        zznew(p),
        "</div>",
    ].join("\n");
}

function zznew(p){
    return [
        '<p>제목 : ${p.title} </p>',
        '<p>위치 : ${p.location}</p>',
        '<p>날찌 : ${p.date.toDateString()}</p>',
    ].join("\n");
}

// function emitPhotoData(aPhoto){
//     const result = [];
//     result.push('<p>위치 : ${aPhoto.location}</p>');
//     result.push('<p>날찌 : ${aPhoto.date.toDateString()}</p>');
//     return result.join("\n");
// }