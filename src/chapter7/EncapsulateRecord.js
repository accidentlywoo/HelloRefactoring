import {Organization} from "./Organization";

// const organization = {name: "애크미 구스베리", country: "GB"};

// function getRawDataOfOrganization(){return organization;}

// let result;
// result+= '<h1>${getRawDataOfOrganization().name}</h1>';
// getRawDataOfOrganization().name = newName;
const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRawDataOfOrganization(){return organization._data;}
function getOrganization(){return organization;}