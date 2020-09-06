import {Organization} from "./Organization";

// const organization = {name: "애크미 구스베리", country: "GB"};

// function getRawDataOfOrganization(){return organization;}

// let result;
// result+= '<h1>${getRawDataOfOrganization().name}</h1>';
// getRawDataOfOrganization().name = newName;
const organization = new Organization({name: "애크미 구스베리", country: "GB"});
// function getRawDataOfOrganization(){return organization._data;}
function getOrganization(){return organization;}

let newName = 'Woo 뭐야 왜이렇게 쓰는거야';
getOrganization().name = newName;

result += `<h1>${getOrganization().name}</h1>`;