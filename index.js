// Modulo Gerente
const contenedor1 = `[
  {
    "inciales":"G",
    "nombre":"Gerente",
    "integrantes":[
       "JV",
       "DG",
       "DC",
       "DR"
    ]
  }
]`
const jsonData =JSON.parse(contenedor1);
console.log(typeof jsonData);

console.log(contenedor1);


// Modulo Coordnadores
const contenedor2 = `[
  {
    "inciales":"C",
    "nombre":"Coordinadores",
    "integrantes":[
       "JV",
       "DG",
       "DC",
       "DR"
    ]
 },
]`
const jsonData_2 =JSON.parse(contenedor2);
console.log(typeof jsonData);

console.log(contenedor2);


// Modulo Directores de proyecto
const contenedor3 = `[
  {
    "inciales":"DP",
    "nombre":"Directores de proyecto",
    "integrantes":[
       "JV",
       "DG",
       "DC"
    ]
 },
]`
const jsonData_3 =JSON.parse(contenedor4);
console.log(typeof jsonData);

console.log(contenedor3);


// Modulo Comite de cambios 
const contenedor4 = `[
  {
    "inciales":"CC",
    "nombre":"Comite de cambios",
    "integrantes":[
       "JV",
       "DG",
       "DC",
       "DR",
       "SS",
       "RN"
    ]
 },
]`
var jsonData_4 =JSON.parse(contenedor4);
console.log(typeof jsonData);

console.log(contenedor4);


// Modulo Aprovadores
const contenedor5 = `[
  {
    "inciales":"A",
    "nombre":"Aprobadores",
    "integrantes":[
       "JV",
       "DG"
    ]
 }
]`
const jsonData_5 =JSON.parse(contenedor5);
console.log(typeof jsonData);

console.log(contenedor5);

// document.getElementsByClassName("Iniciales").innerHTML ="G";
// document.getElementsByClassName("nombre").innerHTML ="Gerente";
// document.getElementsByClassName("integrantes").innerHTML =["JV","DG","DC","DR"];
